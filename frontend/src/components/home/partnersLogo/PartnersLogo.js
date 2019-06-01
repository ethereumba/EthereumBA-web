import React from "react";
import { Grid } from "@material-ui/core";

import './partnersLogo.scss';

const PartnersLogo = ({ image, logo}) => (
     
    <Grid item xs={6} sm={2} md={3} lg={2} className="box-partners">
        <div className={"partners-logo"}>
            <img src={image} alt={logo} />
        </div>
    </Grid>
    
)

export default PartnersLogo