import React, { Component } from 'react';
import '../styles/App.css';

class Info extends Component {
    render() {
        return (
            <div className="section more-info container">
                <a href="#" className="item">
                    <i className="fas fa-info fa-3x"></i>
                    <h3 className="more-info__title">Hours and directions</h3>
                </a>
                <a href="#" className="item">
                    <i className="fas fa-pencil-alt fa-3x"></i>
                    <h3 className="more-info__title">Our policy</h3>
                </a>
                <a href="#" className="item">
                    <i className="fas fa-binoculars fa-3x"></i>
                    <h3 className="more-info__title">Finding a lost pet</h3>
                </a>
            </div>
        );
    }
}

export default Info;