import React, { Component } from 'react';
import '../styles/App.css';

class Nav extends Component {
    handleClick = () => {
        const collapse = document.querySelector('.nav__collapse');
        const icon = document.querySelector('.nav__icon');
        collapse.classList.toggle('nav__collapse--on')
    }
    render() {
        return (
            <div className="nav">
                <div className="wrapper">
                    <div className="nav__top">
                        <ul className="flex-space-between">
                            <li>LA Animal Services</li>
                            <li>
                                <input className="nav__top__input" type="text" placeholder="search"></input>
                            </li>
                            <li className="nav__icon fa fa-bars" onClick={this.handleClick}>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__links">
                        <ul className="flex">
                            <li>Home</li>
                            <li>Visit</li>
                            <li>Calendar</li>
                            <li>Adopt</li>
                            <li>About Us</li>
                            <li>Pet Care</li>
                            <li>Policies</li>
                            <li>Volonteers</li>
                            <li>Donate</li>
                        </ul>
                    </div>
                    <div className="nav__collapse">
                        <ul>
                            <li>Home</li>
                            <li>Visit</li>
                            <li>Calendar</li>
                            <li>Adopt</li>
                            <li>About Us</li>
                            <li>Pet Care</li>
                            <li>Policies</li>
                            <li>Volunteers</li>
                            <li>Donate</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
