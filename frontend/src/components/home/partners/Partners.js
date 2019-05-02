import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import zeppelin from "../../../assets/partners/zeppelin.png";
import xivis from "../../../assets/partners/xivis.png";
import maker from "../../../assets/partners/maker.png";
import decentraland from "../../../assets/partners/decentraland.png";
import rcn from "../../../assets/partners/rcn.png";

import "./partners.scss";

export default class Partners extends Component {
  render() {
    return (
      <div className={"partners"}>
        <div className="container-partners">
          <Grid className="container-box" container>
            <Grid item xs={6} sm={2} md={3} lg={2} className="box-partners">
              <div className={"partners-logo"}>
                <img src={zeppelin} alt="Logo zeppelin" />
              </div>
            </Grid>

            <Grid item xs={6} sm={2} md={3} lg={2} className="box-partners">
              <div className={"partners-logo"}>
                <img src={xivis} alt="Logo xivis" />
              </div>
            </Grid>

            <Grid item xs={6} sm={2} md={3} lg={2} className="box-partners">
              <div className={"partners-logo"}>
                <img src={maker} alt="Logo maker" />
              </div>
            </Grid>

            <Grid item xs={6} sm={2} md={3} lg={2} className="box-partners">
              <div className={"partners-logo"}>
                <img src={decentraland} alt="Logo meetup" />
              </div>
            </Grid>

            <Grid item xs={6} sm={2} md={3} lg={2} className="box-partners">
              <div className={"partners-logo"}>
                <img src={rcn} alt="Logo meetup" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
