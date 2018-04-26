import React, { Component } from 'react';
import logoDS from './img/logoDS.svg';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './App.css';
import Cv from "./cv/Cv";
import {auth, firestore} from './firebase';
import { credentials } from "./environment";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'select',
      user: {}
    }

    auth.signInWithEmailAndPassword(credentials.login, credentials.password).then((authUser) => {
      this.userRef = firestore.collection('users').doc(authUser.uid).onSnapshot((snapshot) => {
        this.setState({
          user: snapshot.data()
        });
      });
    })
    .catch(error => {
      console.log('error', error);
    });
  }

  printDocument() {
    const input = document.getElementById('firstPage');
    const input2 = document.getElementById('secondPage');
    html2canvas(input).then((canvas) => {
      html2canvas(input2).then((canvas2) => {
        const imgData = canvas.toDataURL('image/png');
        const imgData2 = canvas2.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.addPage();
        pdf.addImage(imgData2, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      });
    });
  }

  change(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    let { user } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoDS} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dynamic CV</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.printDocument}>Print</button>
          <select id="lang" onChange={this.change} value={this.state.value}>
            <option value="select">Select</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
        </p>
        <Cv user={user} />
      </div>
    );
  }
}

export default App;
