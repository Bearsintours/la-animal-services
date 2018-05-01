import React, { Component } from 'react';
import '../styles/App.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__top">
                    <div className="footer__top__newsletter">
                        <p>Get latest updates : sign up for our newsletter</p>
                        <input type="text" placeholder="Enter email">
                        </input>
                    </div>
                    <div className="footer__top__media">
                        <a href="https://www.facebook.com/LAAnimalServices" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="https://twitter.com/lacitypets" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.instagram.com/laanimalservices/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="https://www.youtube.com/user/animalrescueteamla" target="_blank"><i className="fab fa-youtube fa-2x"></i></a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>
                        City of Los Angeles, Department of Animal Services
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
