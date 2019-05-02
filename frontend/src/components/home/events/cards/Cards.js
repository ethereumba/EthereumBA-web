import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cards.scss";

import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { shadows } from "@material-ui/system";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

// imagen
import calendar from "../../../../assets/icons/icon-calendar.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="cards-events">
        <Grid container className="card-container" spacing={6}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={"card-home"}>
              <Card className="card card-shadow">
                <CardContent>
                  <Typography
                    className="container-date"
                    color="textSecondary"
                    gutterBottom
                  >
                    <img src={calendar} alt="icon calendar" />
                    <p className="date">07 FEB 2018</p>
                  </Typography>

                  <Typography className="title" variant="h5" component="h2">
                    <p>Ethereum BSAS #3 Meetup</p>
                  </Typography>

                  <Typography className="more">
                    <p>
                      Ethereum is about bringing together like minds around...
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={"card-home"}>
              <Card className="card card-shadow">
                <CardContent>
                  <Typography
                    className="container-date"
                    color="textSecondary"
                    gutterBottom
                  >
                    <img src={calendar} alt="icon calendar" />
                    <p className="date">07 FEB 2018</p>
                  </Typography>

                  <Typography className="title" variant="h5" component="h2">
                    <p>Ethereum BSAS #3 Meetup</p>
                  </Typography>

                  <Typography className="more">
                    <p>
                      Ethereum is about bringing together like minds around...
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={"card-home"}>
              <Card className="card card-shadow">
                <CardContent>
                  <Typography
                    className="container-date"
                    color="textSecondary"
                    gutterBottom
                  >
                    <img src={calendar} alt="icon calendar" />
                    <p className="date">07 FEB 2018</p>
                  </Typography>

                  <Typography className="title" variant="h5" component="h2">
                    <p>Ethereum BSAS #3 Meetup</p>
                  </Typography>

                  <Typography className="more">
                    <p>
                      Ethereum is about bringing together like minds around...
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
