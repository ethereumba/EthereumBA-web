import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'

import Search from '../../common/search/Search'
import LinkCard from '../../common/linkCard/LinkCard'
import down from '../../../assets/icons/baseline-keyboard_arrow_down-24px.svg'
import './category.scss'

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
    const { title, entries } = this.props
    const { visible } = this.state
    return (
      <div className="box-categories">
        <div className="text-button">
          <img src={down} alt="down" className="img-down" onClick={this._fadeOutButton} />
          <p className="text-categoria" onClick={this._fadeOutButton}>
            {title}
          </p>
        </div>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
          {visible && entries.map(entrie => <LinkCard title={entrie.title} url={entrie.url} />)}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Category.propTypes = {
  title: PropTypes.string,
  entries: PropTypes.array,
}
