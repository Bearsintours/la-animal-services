import React, { Component } from 'react';
import '../styles/App.css';

class Info extends Component {
    render() {
        return (
            <div class="section more-info container">
                <a href="#" class="item">
                    <i class="fas fa-info fa-3x"></i>
                    <h3 class="more-info__title">Hours and directions</h3>
                </a>
                <a href="#" class="item">
                    <i class="fas fa-pencil-alt fa-3x"></i>
                    <h3 class="more-info__title">Our policy</h3>
                </a>
                <a href="#" class="item">
                    <i class="fas fa-binoculars fa-3x"></i>
                    <h3 class="more-info__title">Finding a lost pet</h3>
                </a>
            </div>
        );
    }
}

export default Info;