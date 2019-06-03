import React, { Component } from "react";
import HeaderWhite from "../../components/headerWhite/HeaderWhite";
import Categories from "../../components/education/categories/Categories";

import './education.scss'

export default class Education extends Component {

  render() {
    
    return <div>
      
      <HeaderWhite />

      <Categories />

    </div>
  }
}
