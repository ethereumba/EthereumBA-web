import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import community from "../../../assets/icons/1.png";
import networking from "../../../assets/icons/2.png";
import education from "../../../assets/icons/3.png";
import future from "../../../assets/icons/4.png";

import "./community.scss";

export default class Community extends Component {
  render() {
    return (
      <div className={"community"}>
        <Grid
          container
          className={"container-community community-text"}
          spacing={6}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} className={"box-community"}>
            <div className={"card-community"}>
              <img src={community} alt="Community" />
              <p className={"title"}>Community</p>

              <p className={"text"}>
                We encourage developers, technologists, cypher punks, coders,
                crypto-economists, disegners, makers, and the like to apply. Our
                ecosystem is bottom up. Emergent.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} className={"box-community"}>
            <div className={"card-community"}>
              <img src={networking} alt="Networking" />
              <p className={"title"}>Networking</p>
              <p className={"text"}>
                Note that we've rebranded for the 2019 event. We feel that
                "hackathons", are great technological experiences, but the
                ETHDenver 2018 turned out to be so much more.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} className={"box-community"}>
            <div className={"card-community"}>
              <img src={education} alt="Education" />
              <p className={"title"}>Education</p>
              <p className={"text"}>
                The ETHDenver #DUIDLATHON is about bringing together like minds
                around a common purpose. Distributed computing is the future,
                and colorado is a leading community supporting this emerging
                technology.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} className={"box-community"}>
            <div className={"card-community"}>
              <img src={future} alt="Future" />
              <p className={"title"}>Future</p>
              <p className={"text"}>
                Our event is about empowering participants to shape this new
                world, while cementing the Rocky Mountain region and the State
                of Colorado as a thriving hub of Ethereum blockchain innovation
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
