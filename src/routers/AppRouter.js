import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Visit from '../components/Visit';
import Calendar from '../components/Calendar';
import Adopt from '../components/Adopt';
import AboutUs from '../components/AboutUs';
import PetCare from '../components/PetCare';
import Policies from '../components/Policies';
import Volunteer from '../components/Volunteer';
import Donate from '../components/Donate';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/visit" component={Visit} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/adopt" component={Adopt} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/petcare" component={PetCare} />
                <Route exact path="/policies" component={Policies} />
                <Route exact path="/volunteer" component={Volunteer} />
                <Route exact path="/donate" component={Donate} /> 
                <Route component={NotFoundPage} />     
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;