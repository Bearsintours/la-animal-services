import React, { Component } from 'react';
import '../styles/App.css';

class Intro extends Component {
    render () {
        return (
            <div className="intro">
                <div className="intro__text">
                    <h1>Find an adorable pet today!</h1>
                    <h3>Hundreds of pets are looking for a home</h3>
                    <button className="intro__btn">Adopt today</button>
                </div>
            </div>
        );
    }
}

export default Intro;