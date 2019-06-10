import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./categories.scss";
import _groupBy from 'lodash/groupBy'
import _forEach from 'lodash/forEach'
import Category from "../category/Category";
import Search from "../../common/search/Search";


const axios = require("axios");

export default class Categories extends Component {
  state = {
    categories: [],
    arrayCategory: []
  };

  componentDidMount = async () => {
    await this._fetchData();
  };


  formatData = data => {
    let arrayCategory = {};

    arrayCategory = _groupBy(data, 'category');
    this.setState({ arrayCategory: arrayCategory });

  };

  _fetchData = async () => {
    try {
      const response = await axios.get(
        "http://www.mocky.io/v2/5ce83421350000c511cf643e"
      );
      this.formatData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    let {arrayCategory} = this.state
    let categoryKeys = Object.keys(arrayCategory)

      return (
      <div>

       <Grid item xs={12} className={"categories"}> 
       <Search />
          {categoryKeys.map(key => {
            let entries = arrayCategory[key]
            return (
              
              <Category  title={key} entries={entries}/>
              
              )
            })
          }
        </Grid>
        <div className="finish"/>
      </div>
    );
  }
}
