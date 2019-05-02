import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "./../../components/header/Header";
import Cards from "./../../components/home/events/cards/Cards";
import ButtonView from "./../../components/home/events/button-view/Button-view";
import Background from "../../components/home/events/background/Background";
import Social from "../../components/home/social/Social";
import Community from "../../components/home/community/Community";
import Partners from "../../components/home/partners/Partners";

import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className={"home"}>
        <Header />

        <div className={"main"} />

        <div className="sub-title">
          <p>Build the decentralized future</p>
        </div>

        <Background />

        <div className="card-events">
          <Cards />
        </div>

        <div className="gradient">
          <div className="btn-view-events">
            <ButtonView />
          </div>

          <Social />

          <div className={"title-2"}>
            <p>Ethereum Buenos Aires</p>
          </div>

          <div className="sub-title-2">
            <p>
              A ground swell of diverse intelligences who are committed to
              #buidling the decentralized future
            </p>
          </div>

          <Community />

          <div className={"title-2"}>
            <p>partners</p>
          </div>

          <Partners />

          <div className="footer">
            <p id="date">Ethereum Buenos Aires 2019</p>
          </div>
        </div>
      </div>
    );
  }
}
