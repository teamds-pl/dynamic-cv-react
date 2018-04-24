import React, { Component } from 'react';
import './Cv.css';
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Skillset from "./skillset/Skillset";
import PageSecond from "./pageSecond/pageSecond";
import PageFirst from "./pageFirst/pageFirst";

import logoDS from './../img/logoDS.svg';
import frontEnd from './../img/front-end.svg';
import education from './../img/education.svg';
import bussinessAnalyst from './../img/bussinessAnalyst.svg';
import bluePartCircle from './../img/blue-part-circle.svg';
import cq5 from './../img/cq5.svg';
import experience from './../img/experience.svg';
import java from './../img/java.svg';
import profile from './../img/profile.svg';
import skillset from './../img/skillset.svg';
import target from './../img/target.svg';
import test from './../img/test.svg';

import firebase from './../firebase';

class Cv extends Component {
  constructor(props) {
    super(props)

    this.usersRef = firebase.database().ref('users');

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      let newState = [];
      for (let user in users) {
        newState.push(users[user]);
      }
      this.setState({
        users: newState
      });
    });
  }

  render() {
    let user = {};
    let experiencesList = [];
    let educationList = [];
    let skillsetList = [];
    let title;
    let sourcesFirst = {};
    let sourcesSecond = {};

    sourcesFirst.logoDS = logoDS;
    sourcesFirst.headerLogo = "";
    sourcesFirst.experience = experience;
    sourcesFirst.education = education;

    sourcesSecond.target = target;
    sourcesSecond.skillset = skillset;
    sourcesSecond.profile = profile;
    sourcesSecond.bluePartCircle = bluePartCircle;

    if (this.state.users[0]) {
      user = this.state.users[0];

      experiencesList = user.experience.map(function (experience, index) {
        return (
          <Experience experience={experience} key={index} />
        );
      });

      educationList = user.education.map(function (education, index) {
        return (
          <Education education={education} key={index} />
        )
      });

      skillsetList = (
        <Skillset skillset={user.skillset} />
      );

      title = user.title.toLowerCase()
      if (title.includes('front-end')) {
        sourcesFirst.headerLogo = frontEnd;
      } else if (title.includes('java')) {
        sourcesFirst.headerLogo = java;
      } else if (title.includes('test')) {
        sourcesFirst.headerLogo = test;
      } else if (title.includes('bussiness')) {
        sourcesFirst.headerLogo = bussinessAnalyst;
      } else if (title.includes('cq5')) {
        sourcesFirst.headerLogo = cq5;
      }
    }


    return (
      <div className="Cv">
        <PageFirst user={user} educationList={educationList} experiencesList={experiencesList} sources={sourcesFirst} />
        <PageSecond user={user} skillsetList={skillsetList} sources={sourcesSecond} />
      </div>
    );
  }
}

export default Cv;
