import React, { Component } from 'react'
import Header from '../../components/header/Header'

import Categories from '../../components/education/categories/Categories'

import './education.scss'

export default class Education extends Component {
  render() {
    return (
      <div>
        <Header white selected={'education'} />

        <Categories />
      </div>
    )
  }
}
