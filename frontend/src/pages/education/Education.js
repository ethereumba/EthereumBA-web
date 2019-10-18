import React from 'react'

// components
import Header from '../../components/header/Header'
import Background from '../../components/common/background/Background'
import Search from '../../components/common/search/Search'
import Categories from '../../components/education/categories/Categories'

// styles
import './education.scss'

const Education = () => 
(
      <Background>
        <Header white selected={'education'} />
        <Search />
        <Categories />
      </Background>
    )

export default Education