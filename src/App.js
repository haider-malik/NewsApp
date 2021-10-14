import './App.css';

import React, { Component } from 'react'
import Navbar from './cstm_components/Navbar';
import Newsbox from './cstm_components/Newsbox';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Newsbox/>
      </div>
    )
  }
}

