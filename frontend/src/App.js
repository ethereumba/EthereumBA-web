import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// pages
import Home from './pages/home'
import Ecosystem from './pages/ecosystem'
import Education from './pages/education'
import Events from './pages/events'

// styles
import './styles/main.scss'

// store
import configureStore, { history } from './store/store'

const { store } = configureStore()

const App = () => 
    (
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

export default App
