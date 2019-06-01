import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CommunityCard from "../../home/communityCard/CommunityCard";

import CommunityImage1 from '../../../assets/icons/1.png'
import CommunityImage2 from '../../../assets/icons/2.png'
import CommunityImage3 from '../../../assets/icons/3.png'
import CommunityImage4 from '../../../assets/icons/4.png'
import "./community.scss";


const communityData = [
  {
    image: CommunityImage1,
    title: 'Community',
    text: 'We encourage developers, technologists, cypher punks, coders, crypto-economists, designers, makers, and the like to apply. Our ecosystem is bottom up. Emergent.'
  },
  {   
    image: CommunityImage2,
    title: 'Networking',
    text: 'Note that we’ve rebranded for the 2019 event. We feel that “hackathons”, are great technological experiences, but the ETHDenver 2018 turned out to be so much more.'
  },
  {
    image: CommunityImage3,
    title: 'Education',
    text: 'The ETHDenver #BUIDLATHON is about bringing together like minds around a common purpose. Distributed computing is the future, and Colorado is a leading community supporting this emerging technology.'
  },
  {
    image: CommunityImage4,
    title: 'Future',
    text: 'Our event is about empowering participants to shape this new world, while cementing the Rocky Mountain region and the State of Colorado as a thriving hub of Ethereum blockchain innovation.'
  }
]

export default class Community extends Component {
  render() {

    return (
      <div className={"community"}>

        <Grid item xs={12}>
            <div className={"sub-title"}>
              <h1>ETHEREUM BUENOS AIRES</h1>
            </div>

            <div className={"center"}>
              <p className={"title-2"}>A ground swell of diverse intelligences who are committed to #buidling the decentralized future</p>
            </div>
        </Grid>

        <Grid
          container
          className={"container-community community-text"}
          spacing={0}>
          
          {
            communityData.map(community => {
              return (
          
          <CommunityCard key={community.title} image={community.image} title={community.title} text={community.text}/>
    );
  })
} 
        </Grid>
      </div>
    );
  }
}

