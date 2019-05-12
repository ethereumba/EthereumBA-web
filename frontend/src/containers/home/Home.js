import React, { Component } from "react"; 
import Header from "./../../components/header/Header";
import Social from "../../components/home/social/Social";
import Community from "../../components/home/community/Community";
import Partners from "../../components/home/partners/Partners";
import Events from "../../components/home/events/Events";


import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className={"main"} />

    
      <div className="gradient">
        
        <Events />

        <Social />

        <Community />

        <Partners />

        </div>

      </div>

    );
  }
}
