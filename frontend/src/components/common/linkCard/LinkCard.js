import React from "react";
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';

import './linkCard.scss'



const LinkCard = ({ title, url }) => (
    <Grid item md={12} className="box-linkCard">

<div className="container-linkCard card-shadow">
      <div className="center-item">
        <p className="text-linkCard">
            {title}
        </p>
        <p className="text-linkCard-2">
            {url}
        </p>
      </div>    
</div>


      </Grid>
)

export default LinkCard