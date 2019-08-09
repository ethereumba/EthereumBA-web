import React, { Component } from 'react'

import search from '../../../assets/icons/baseline-search-24px.svg'
import './search.scss'

export default class Search extends Component {
  render() {
    return (
      <div className="container-search">
        <img className="img-search" src={search} />
        <input type="text" className="search" placeholder="Buscar" />
      </div>
    )
  }
}
