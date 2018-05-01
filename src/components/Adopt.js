import React, { Component } from 'react';
import '../styles/App.css';

class Adopt extends Component {
    render () {
        return (
            <div className="section adopt">
                <h1 className="section__title">I want a pet</h1>
                <div className="adopt__pets container">
                    <div className="item">
                        <h2>Dogs</h2>
                        <a href="#">
                            <img className="adopt__pets__img" src="https://images.unsplash.com/photo-1506499422601-ecc792cf898e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96c8170d700aa5a914b043ecc28dc8f6&auto=format&fit=crop&w=500&q=60"></img>
                        </a>
                    </div>
                    <div className="item">
                        <h2>Cats</h2>
                        <a href="#">
                            <img className="adopt__pets__img" src="https://images.unsplash.com/photo-1479065476818-424362c3a854?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=290c91744d9c81d3f7fb1f7a5bdc96ee&auto=format&fit=crop&w=500&q=60"></img>
                        </a>
                    </div>
                    <div className="item">
                        <h2>Something else</h2>
                        <a href="#">
                            <img className="adopt__pets__img" src="https://images.unsplash.com/photo-1497469074122-b9cc3bb29f4b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=743cb8d60febe71d30fb7af69d9f5b38&auto=format&fit=crop&w=500&q=60"></img>
                        </a>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Adopt;