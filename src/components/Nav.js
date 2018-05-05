import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/visit">Visit</Link></li>
                            <li><Link to="/adopt">Adopt</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><Link to="/petcare">Pet care</Link></li>
                            <li><Link to="/policies">Policies</Link></li>
                            <li><Link to="/volunteer">Volunteer</Link></li>
                            <li><Link to="/donate">Donate</Link></li>
                        </ul>
                    </div>
                    <div className="nav__collapse">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/visit">Visit</Link></li>
                            <li><Link to="/adopt">Adopt</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><Link to="/petcare">Pet care</Link></li>
                            <li><Link to="/policies">Policies</Link></li>
                            <li><Link to="/volunteer">Volunteer</Link></li>
                            <li><Link to="/donate">Donate</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
