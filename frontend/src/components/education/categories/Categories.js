import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import down from "../../../assets/icons/baseline-keyboard_arrow_down-24px.svg";
import LinkCard from "../../common/linkCard/LinkCard";
import "./categories.scss";

const axios = require("axios");

export default class Categories extends Component {
  state = {
    entries1: [],
    entries2: [],
    entries3: []
  };

  componentDidMount = async () => {
    await this._fetchData();
  };

  formatData = data => {
    let categorias = {};
    // category is a variable temporal
    let category1 = [];
    let category2 = [];
    let category3 = [];
    
    // Category 1
    const filter1 = data.filter(
      categories => categories.category === "Categoria 1"
    );
    category1.push(filter1);
    categorias.categoria1 = filter1;

    for (var i = 0; i < category1[0].length; i++) {
      delete category1[0][i].category;
    }
    this.setState({ entries1: categorias.categoria1 });

    // Category 2
    const filter2 = data.filter(
      categories => categories.category === "Categoria 2"
    );
    category2.push(filter2);
    categorias.categoria2 = filter2;

    for (var i = 0; i < category2[0].length; i++) {
      delete category2[0][i].category;
    }
    this.setState({ entries2: categorias.categoria2 });

    // Category 3
    const filter3 = data.filter(
      categories => categories.category === "Categoria 3"
    );
    category3.push(filter3);
    categorias.categoria3 = filter3;

    for (var i = 0; i < category3[0].length; i++) {
      delete category3[0][i].category;
    }
    this.setState({ entries3: categorias.categoria3 });

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
    return (
      <div>
       <Grid item xs={12} className={"categories"}>
          <div className="box-categories">
            <img src={down} alt="down" className="img-down" />
            <p className="text-categoria">CATEGORIA 1</p>
          </div>

          {this.state.entries1.map(category1 => {
            return (
              <LinkCard
                key={category1.title}
                title={category1.title}
                url={category1.url}
              />
            );
          })}
        </Grid>
 
        <Grid item xs={12} className={"categories"}>
          <div className="box-categories">
            <img src={down} alt="down" className="img-down" />
            <p className="text-categoria">CATEGORIA 2</p>
          </div>
          {this.state.entries2.map(category2 => {
            return (
              <LinkCard
                key={category2.title}
                title={category2.title}
                url={category2.url}
              />
            );
          })}
        </Grid>

        <Grid item xs={12} className={"categories"}>
          <div className="box-categories">
            <img src={down} alt="down" className="img-down" />
            <p className="text-categoria">CATEGORIA 3</p>
          </div>
          {this.state.entries3.map(category3 => {
            return (
              <LinkCard
                key={category3.title}
                title={category3.title}
                url={category3.url}
              />
            );
          })}
        </Grid>

      </div>
    );
  }
}
