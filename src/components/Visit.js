import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer';
import '../styles/App.css';
import '../styles/Visit.css';

const shelters = [
    {
        id: 'east-valley',
        location: 'East Valley Shelter',
        address: '14409 Vanowen St., Van Nuys, CA 91405',
        phone: '(818) 756-9323',
        area: 'Serving the following neighborhoods: Harbor City, San Pedro, Watts (partial), Willowbrook, Wilmington. Outside the city limits, for such communities as Carson, Compton, Gardena, Long Beach, Palos Verdes, Redondo Beach, Signal Hill, Torrance, Watts (partial).Spay/neuter clinic on site.',
        hours: 'Monday & Holidays: Closed, Tuesday-Saturday: 8am - 5pm, Sunday: 11am - 5pm'
    },

    {
        id: 'harbor',
        location: 'Harbor Shelter',
        address: '957 N. Gaffey Street, San Pedro, CA 90731',
        phone: '(310) 548-2632',
        area: 'Serving the following neighborhoods: Arleta, Mission Hills, North Hollywood, Pacoima, Panorama City, Sherman Oaks, Studio City, Sun Valley, Sunland-Tujunga, Sylmar, Toluca Lake, Valley Glen, Valley Village, Van Nuys. Outside the city limits, for such communities as Burbank, Glendale and San Fernando.',
        hours: 'Monday & Holidays: Closed, Tuesday-Saturday: 8am - 5pm, Sunday: 11am - 5pm'
    },

    {
        id: 'north-central',
        location: 'North Central Shelter',
        address: '3201 Lacy Street, Los Angeles, CA 90031',
        phone: '(213) 485-5767',
        area: 'Serving the following neighborhoods: Angelino Heights, Arts District, Atwater Village, Beachwood Canyon, Boyle Heights, Chinatown, Cypress Park, Downtown Los Angeles, Eagle Rock, East Hollywood, Echo Park, El Sereno, Elysian Heights, Elysian Park, Elysian Valley, Franklin Hills, Garvanza, Glassell Park, Griffith Park, Hancock Park, Hermon, Highland Park, Historic Filipino Town, Hollywood, Hollywood Heights, Larchmont, Lincoln Heights, Little Tokyo, Los Feliz, MacArthur Park-Westlake, Melrose Hill, Montecito Heights, Monterey Hills, Mt. Washington, Silver Lake, Solano Canyon, Temple-Beaudry, University Hills, Virgil Village, Wilshire Center, Windsor Square. Outside the city limits, for such communities as Alhambra, East Los Angeles, Glendale, Pasadena.',
        hours: 'Monday & Holidays: Closed, Tuesday-Saturday: 8am - 5pm, Sunday: 11am - 5pm'
    },

    {
        id: 'south-la',
        location: 'South Los Angeles, Chesterfield Square Shelter',
        address: '1850 W. 60th St. Los Angeles, CA 90047',
        phone: '(323) 565-2161',
        area: 'Serving the following neighborhoods: Arlington Heights, Arlington Park, Athens, Baldwin Hills, Baldwin Village, Canterbury Knolls, Carthay, Country Club Heights, Crenshaw, Exposition Park, Gramercy Park, Hyde Park, Lafayette Square, Jefferson Park, Koreatown, Leimert Park, Mid-City, Miracle Mile, Pan Pacific Park, Pico-Union, South Los Angeles, University Park, Vermont Knolls, Village Green, West Adams, West Alameda. Outside the city limits, for such communities as Baldwin Vista, Inglewood, Ladera Heights, View Heights and View Park.Spay/Neuter Clinic on site.',
        hours: 'Monday & Holidays: Closed, Tuesday-Saturday: 8am - 5pm, Sunday: 11am - 5pm'
    },

    {
        id: 'west-la',
        location: 'West Los Angeles Shelter',
        address: '111361 West Pico Blvd., Los Angeles, CA 90064',
        phone: '(310) 207-3156',
        area: 'Serving the following neighborhoods: Bel Air, Benedict Canyon, Beverlywood, Beverly Crest, Beverly Hills*, Brentwood, Century City, Cheviot Hills, Del Rey, Fairfax, Holmby Hills, Kenter Canyon, Laurel Canyon, Mandeville Canyon, Marina Peninsula, Mar Vista, Melrose District, Pacific Palisades, Palisades Highlands, Palms, Rancho Park, Rustic Canyon, Venice, Westchester, Westdale, Westside Village, West Pico, Outside the city limits, for such communities as Culver City, Santa Monica and West Hollywood.Spay/Neuter Clinic on site.',
        hours: 'Monday & Holidays: Closed, Tuesday-Saturday: 8am - 5pm, Sunday: 11am - 5pm'
    },

    {
        id: 'west-valley',
        location: 'West Valley Shelter',
        address: '20655 Plummer Street, Chatsworth, CA 91311',
        phone: '(818) 756-9325',
        area: 'Serving the following neighborhoods: Bell Canyon, Canoga Park, Chatsworth, Encino, Granada Hills, Lake Balboa, Northridge, North Hills, Porter Ranch, Reseda, Sepulveda, Tarzana, Warner Center, West Hills, Winnetka, Woodland Hills. Outside the city limits, for such communities as Agoura, Malibu, Santa Clarita, Valencia and Westlake Village.',
        hours: 'Monday & Holidays: Closed, Tuesday-Saturday: 8am - 5pm, Sunday: 11am - 5pm'
    },
];


const shelterInfo = (shelterId) => {
    const shelter = shelters.filter((shelter) => shelter.id === shelterId);
    console.log(shelter);
    return (
        <div>
            <h3>{shelter[0].location}</h3>
            <p>{shelter[0].adddress}</p>
            <p>{shelter[0].phone}</p>
            <p>{shelter[0].area}</p>
            <p>Shelter Hours: {shelter[0].hours}</p>         
        </div>
    )  
}

const Visit = ({ match }) => (
    <Router>
        <div>
            <div className="component">
                <div className="visit">
                    <h1>Visit our shelters</h1>
                    <ul className="visit__shelters">
                        <li className="visit__shelters__links">
                            <Link to={`${match.url}/east-valley`}>East Valley</Link>
                        </li>
                        <li className="visit__shelters__links">
                            <Link to={`${match.url}/harbor`}>Harbor</Link>
                        </li>
                        <li className="visit__shelters__links">
                            <Link to={`${match.url}/north-central`}>North Central</Link>
                        </li>
                        <li className="visit__shelters__links">
                            <Link to={`${match.url}/south-la`}>South LA</Link>
                        </li>
                        <li className="visit__shelters__links">
                            <Link to={`${match.url}/west-la`}>West LA</Link>
                        </li>
                        <li className="visit__shelters__links">
                            <Link to={`${match.url}/west-valley`}>West Valley</Link>
                        </li> 
                    </ul>
                    <Route path={`${match.url}/:shelterId`} component={Shelter} />
                    <Route 
                        exact path={match.url}
                        render={() => <h3>Please select a shelter.</h3>}
                    />
                </div>
            </div>
            <Footer />
        </div>
    </Router>
);

const Shelter= ({ match }) => (
  <div>
        {shelterInfo(match.params.shelterId)}
  </div>
);
       
export default Visit;