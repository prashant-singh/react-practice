import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Profile from './components/profile';
import Summary from './components/summary';
import Experiences from './components/experiences';
import Educations from './components/educations';
import Calculator from './pages/calculator';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import ReactResume from './pages/reactResume';

class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <Routes>
          <Route path='react/calculator' element={<Calculator />} />
          <Route path='react/react-resume' element={<ReactResume />} />
        </Routes>
      </Router>

    );
  }
}
export default App;