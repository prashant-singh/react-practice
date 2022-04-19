import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Profile from './components/profile';
import Summary from './components/summary';
import Experiences from './components/experiences';
import Educations from './components/educations';

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <div className='container'>
          <Profile />
          <Summary />
          <Experiences />
          <Educations />
        </div>
      </React.Fragment>
    );
  }
}
export default App;