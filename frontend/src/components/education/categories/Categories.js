import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import down from "../../../assets/icons/baseline-keyboard_arrow_down-24px.svg";
import LinkCard from "../../common/linkCard/LinkCard";
import "./categories.scss";
import _groupBy from 'lodash/groupBy'
import _forEach from 'lodash/forEach'


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

    let dataFormatterd = data.map(d => d.category)
    let categories = new Set(dataFormatterd);
    this.setState({categories: categories})
    console.log(categories);
    
    arrayCategory = _groupBy(data, 'category');
    this.setState({ arrayCategory: arrayCategory });
    console.log(arrayCategory)
    
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
    console.
    // console.log(categories);
    
    // _forEach(categories = (category, key) => {
      //   console.log(key)
      // })
      
      
      return (
      <div>
       <Grid item xs={12} className={"categories"}> 
       <div className="box-categories">
         <img src={down} alt="down" className="img-down" />
          
          {categories.map(category => {
            return (
              
              <p className="text-categoria"></p>
              
              )
            })
          }

          </div> 

          {/* {categories.map(category => {
            return (
              <LinkCard
                key={category.title}
                title={category.title}
                url={category.url}
              />
            );
          })} */}
        </Grid>
      </div>
    );
  }
}
