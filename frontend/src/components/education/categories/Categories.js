import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import down from "../../../assets/icons/baseline-keyboard_arrow_down-24px.svg";
import LinkCard from "../../common/linkCard/LinkCard";
import Skeleton from "react-loading-skeleton";
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
    let categories1 = [];
    let categories2 = [];
    let categories3 = [];

    const filterCategories1 = data.filter(
      categories => categories.category === "Categoria 1"
    );
    categories1.push(filterCategories1);
    this.setState({ entries1: filterCategories1 });

    const filterCategories2 = data.filter(
      categories => categories.category === "Categoria 2"
    );
    categories2.push(filterCategories2);
    this.setState({ entries2: filterCategories2 });

    const filterCategories3 = data.filter(
      categories => categories.category === "Categoria 3"
    );
    categories3.push(filterCategories3);
    this.setState({ entries3: filterCategories3 });
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
