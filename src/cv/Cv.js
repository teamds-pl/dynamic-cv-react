import React, { Component } from 'react';
import './Cv.css';
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Skillset from "./skillset/Skillset";

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
    let headerLogo;
    let title;

    if(this.state.users[0]) {
      user = this.state.users[0];

      experiencesList = user.experience.map(function(experience, index){
        return (
          <Experience experience={experience} key={index}/>
        );
      });

      educationList = user.education.map(function(education, index){
        return (
          <Education education={education} key={index} />
        )
      });

      skillsetList = (
        <Skillset skillset={user.skillset}/>
      );

      title = user.title.toLowerCase()
      if (title.includes('front-end')) {
        headerLogo = frontEnd;
      } else if (title.includes('java')) {
        headerLogo = java;
      } else if (title.includes('test')) {
        headerLogo = test;
      } else if (title.includes('bussiness')) {
        headerLogo = bussinessAnalyst;
      } else if (title.includes('cq5')) {
        headerLogo = cq5;
      }
    }


    return (
      <div className="Cv">
        <div className="Cv-page" id="divToPrintPage1">
          <div className="Cv-title">
            <img src={logoDS} className="Cv-logo" alt="logo" />
            {headerLogo ? <img src={headerLogo} className="Cv-logo-header" alt="logo" /> : ''}
            <div className="text-main">{user.name}</div>
            <div className="text-second">{user.title}</div>
          </div>
          <div className="Cv-experience">
            <div className="Cv-experience-title">
              <img src={experience} className="Cv-logo" alt="logo" />
              <span>EXPERIENCE</span>
            </div>
            {experiencesList}
          </div>
          <div className="Cv-education">
            <div className="Cv-education-title">
              <img src={education} className="Cv-logo" alt="logo" />
              <span>EDUCATION</span>
            </div>
            {educationList}
          </div>
        </div>
        <div className="Cv-page" id="divToPrintPage2">
          <div className="Cv-expectations">
            <div className="Cv-expectations-title">
              <img src={target} className="Cv-logo" alt="logo" />
              <span>PROFESIONAL EXPECTATION</span>
            </div>
            <div className="Cv-expectations-desc">
              <span>{user.professionalExpectations}</span>
            </div>
          </div>
          <div className="Cv-skillset">
            <div className="Cv-skillset-logo">
              <img src={skillset} className="Cv-logo" alt="logo" />
            </div>
            <div className="Cv-skillset-title">
              <span>SKILLSET</span>
            </div>
            {skillsetList}
          </div>
          <div className="Cv-personalNote">
            <div className="Cv-personalNote-title">
              <img src={profile} className="Cv-logo" alt="logo" />
              <span>PERSONAL NOTE</span>
            </div>
            <div className="Cv-personalNote-desc">
              {user.personalNote}
            </div>
          </div>
          <div className="Cv-contact">
            <img src={bluePartCircle} className="Cv-logo" alt="logo" />
            <span>www.ds.eu</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
