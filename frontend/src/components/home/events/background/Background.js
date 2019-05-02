import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import eth_background from "../../../../assets/vector-coin-ethereum-10.png";

import "./background.scss";

export default class Background extends Component {
  render() {
    return (
      <div className={"background-events"}>
        <div className="background">
          <img src={eth_background} alt="logo eth" />
        </div>
      </div>
    );
  }
}
