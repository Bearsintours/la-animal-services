import React, { Component } from 'react';
import Footer from './Footer';
import '../styles/App.css';

class PetCare extends Component {
    render() {
        return (
            <div className="component">
                <p>Pet care</p>
                <Footer />
            </div>
        )
    }
}

export default PetCare;