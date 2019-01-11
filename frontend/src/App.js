import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/home/Home';
import Ecosystem from './containers/ecosystem/Ecosystem';
import Education from './containers/education/Education';
import Events from './containers/events/Events';

class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="*" component={Home} />
                        <Route path="/ecosystem" component={Ecosystem} />
                        <Route path="/events" component={Events} />
                        <Route path="/education" component={Education} />
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}

export default App

