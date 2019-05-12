import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import zeppelin from "../../../assets/partners/zeppelin.png";
import xivis from "../../../assets/partners/xivis.png";
import maker from "../../../assets/partners/maker.png";
import decentraland from "../../../assets/partners/decentraland.png";
import rcn from "../../../assets/partners/rcn.png";

import "./partners.scss";

const logosPartner = [

      {
        img: zeppelin,
        alt: 'logo zepellin'
      },
      {
        img: xivis,
        alt: 'logo xivis'
      },
      {
        img: maker,
        alt: 'logo maker'
      },
      {
        img: decentraland,
        alt: 'logo decentraland'
      },
      {
        img: rcn,
        alt: 'logo rcn'
      }
];


export default class Partners extends Component {
  render() {
    return (
      <div className={"partners"}>

        <div className={"sub-title"}>
            <p>partners</p>
        </div>

        <div className="container-partners">
          <Grid className="container-box" container>
          {
            
          logosPartner.map(logo => {
            return (
            <Grid item xs={6} sm={2} md={3} lg={2} className="box-partners">
              <div className={"partners-logo"}>
                <img src={logo.img} alt={logo.alt} />
              </div>
            </Grid>
            );
          })
        }

          </Grid>
          
        </div>

                 
        <div className="footer">
            <p>Ethereum Buenos Aires 2019</p>
          </div>
      </div>
    );
  }
}
