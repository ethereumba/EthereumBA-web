import React from "react";
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';

import './linkCard.scss'



const LinkCard = ({ title, url}) => (
    <Grid item xs={12} sm={6} md={3} lg={3} className={"box-linkCard"}>

<Card className="container-linkCard">
      <div className="center-item">
        <p className="text-linkCard" component="p">
            {title}
        </p>
        <p className="text-linkCard-2" component="p">
            {url}
        </p>
      </div>    
</Card>


      </Grid>
)

export default LinkCard