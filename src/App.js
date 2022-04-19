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

  mainStyle = {
    marginLeft: 100,
    marginRight: 100
  }

  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <main style={this.mainStyle} className='container'>
          <Profile />
          <Summary />
          <Experiences />
          <Educations />
        </main>
      </React.Fragment>
    );
  }
}
export default App;