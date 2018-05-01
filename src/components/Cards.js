import React, { Component } from 'react';
import '../styles/App.css';


class Cards extends Component {
    render() {
        return (
            <div className="section info">
                <h1 className="section__title">I need help</h1>
                <div className="flex-center">
                    <a href="#">
                        <div className="card">
                            <div className="card__img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DOJZMdIVPUD7yPjw7-7EnuTgkXddu4M3FawmTs52rwp7S7Rx"></img>
                            </div>
                            <div className="card__text">
                                <h3>Services</h3>
                                <ul className="list info__services">
                                    <li>Spay & Neuter Resources</li>
                                    <li>Microchipping Your Pet</li>
                                    <li>Calendar of Events</li>
                                    <li>Online Spay & Neuter Voucher </li>
                                    <li>Application</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="card">
                            <div className="card__img">
                                <img src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e64be3b9dcb29b57f6034eeccc6561e&auto=format&fit=crop&w=400&q=60"></img>
                            </div>
                            <div className="card__text">
                                <h3>Licensing</h3>
                                <ul className="list info__licence">
                                    <li>About licencing</li>
                                    <li>Get a new licence</li>
                                    <li>Renew your licence</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="card">
                            <div className="card__img">
                                <img src="https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d3786eeaf183b022befb24523a4e64a0&auto=format&fit=crop&w=500&q=60"></img>
                            </div>
                            <div className="card__text">
                                <h3>Caring for</h3>
                                <ul className="list info__care">
                                    <li>Dogs</li>
                                    <li>Cats</li>
                                    <li>Others</li>
                                    <li>Planning for your pet's future</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="card">
                            <div className="card__img">
                                <img src="https://images.unsplash.com/photo-1507045897632-be7b2ec43e75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0edc775e3b360e433280b295081d8e98&auto=format&fit=crop&w=500&q=60"></img>
                            </div>
                            <div className="card__text">
                                <h3>Get help</h3>
                                <ul className="list info__help">
                                    <li>Wildlife</li>
                                    <li>Emergency Preparedness</li>
                                    <li>Report Animal Cruelty</li>
                                    <li>Deceased Animal</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="card">
                            <div className="card__img">
                                <img src="https://images.unsplash.com/photo-1511976773147-53cdbeb9fa8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b3137ebd914c7a338e57b35163de6a4&auto=format&fit=crop&w=1050&q=80"></img>
                            </div>
                            <div className="card__text">
                                <h3>The law</h3>
                                <ul className="list info__law">
                                    <li>Barking</li>
                                    <li>Permits</li>
                                    <li>Spay & Neuter Ordinance</li>
                                    <li>Chained Dog Laws</li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Cards;