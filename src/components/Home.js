import React, { Component } from 'react';
import Intro from './Intro.js';
import Info from './Info.js';
import Animals from './Animals.js';
import Cards from './Cards.js';
import HelpUs from './HelpUs';
import Footer from './Footer';
import '../styles/App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Intro />
                <div className="wrapper">
                    <Info />
                    <Animals />
                    <Cards />
                    <HelpUs />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
