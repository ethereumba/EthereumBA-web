import React, { Component, Fragment } from 'react'
import down from '../../../assets/icons/baseline-keyboard_arrow_down-24px.svg'
import LinkCard from '../../common/linkCard/LinkCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './category.scss'
import Search from '../../common/search/Search'

export default class Category extends Component {
  state = {
    visible: true,
  }

  _fadeOutButton = () => {
    let visibleChange = this.state.visible
    if (visibleChange == true) {
      this.setState({ visible: false })
    } else {
      this.setState({ visible: true })
    }
  }

  render() {
    let { title, entries } = this.props
    let { visible } = this.state
    return (
      <div className="box-categories">
        <div className="text-button">
          <img src={down} alt="down" className="img-down" onClick={this._fadeOutButton} />
          <p className="text-categoria" onClick={this._fadeOutButton}>
            {title}
          </p>
        </div>
        <ReactCSSTransitionGroup
          component={Fragment}
          transitionName="fade"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {visible &&
            entries.map((entrie, i) => (
              <LinkCard title={entrie.title} subtitle={entrie.subtitle} url={entrie.url} key={`link-card-key--${i}`} />
            ))}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
