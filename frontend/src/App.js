import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './containers/home/Home';
import Ecosystem from './containers/ecosystem/Ecosystem';
import Education from './containers/education/Education';
import Events from './containers/events/Events';
import Header from "./components/header/Header";
import Cards from './components/home/events/cards/Cards';
import ButtonView from './components/home/events/button-view/Button-view';
import Background from './components/home/events/background/Background';
import Social from './components/home/social/Social';
import community from './components/home/community/Community';
import Partners from './components/home/partners/Partners';

import './styles/main.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/ecosystem" component={Ecosystem}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/education" component={Education}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default App

