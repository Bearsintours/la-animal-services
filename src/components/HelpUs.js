import React, { Component } from 'react';
import '../styles/App.css';

class HelpUs extends Component {
    render() {
        return (
            <div className="section volunteer">
                <h1 className="section__title">Help us</h1>
                <ul className="volunteer__options">
                    <button className="btn">Donate Now</button>
                    <button className="btn">Vonlunteer</button>
                    <button className="btn">Explore</button>
                </ul>
            </div>
        );
    }
}

export default HelpUs;
