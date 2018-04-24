import React, { Component } from 'react';
import './Cv.css';
import SecondPage from "./secondPage/secondPage";
import FirstPage from "./firstPage/firstPage";

class Cv extends Component {
  render() {
    let user = this.props.user;

    return (
      <div className="Cv">
        <FirstPage user={user} sources={{}} />
        <SecondPage user={user} sources={{}} />
      </div>
    );
  }
}

export default Cv;
