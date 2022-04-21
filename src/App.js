import './App.css';
import React, { Component } from 'react';
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