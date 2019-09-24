import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './containers/home/Home'
import Ecosystem from './containers/ecosystem/Ecosystem'
import Education from './containers/education/Education'
import Events from './containers/events/Events'
import './styles/main.scss'

import configureStore, { history } from './store/store'

const { store } = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path='/ecosystem' component={Ecosystem} />
            <Route path='/events' component={Events} />
            <Route path='/education' component={Education} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
