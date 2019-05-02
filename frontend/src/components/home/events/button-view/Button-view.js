import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

import "./button-view.scss";

export default class ButtonView extends Component {
  render() {
    return (
      <div className={"button-events"}>
        <Fab
          variant="extended"
          size="large"
          color="primary"
          aria-label="Add"
          className={"btn-view"}
        >
          View All Events
        </Fab>
      </div>
    );
  }
}
