import React, { Component } from 'react'

import Header from '../../components/header/Header'
import Background from '../../components/common/background/Background'
import Search from '../../components/common/search/Search'
import Categories from '../../components/education/categories/Categories'

import './education.scss'

export default class Education extends Component {
  render() {
    return (
      <Background>
        <Header white selected={'education'} />
        <Search />
        <Categories />
      </Background>
    )
  }
}
