import React, { Component } from 'react';
import Nav from './Nav.js';
import Intro from './Intro.js';
import Info from './Info.js';
import Adopt from './Adopt.js';
import Cards from './Cards.js';
import Volunteer from './Volunteer';
import Footer from './Footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro />
        <div className="wrapper">
          <Info />
          <Adopt />
          <Cards />
          <Volunteer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
