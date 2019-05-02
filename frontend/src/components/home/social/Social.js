import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import meetup from '../../../assets/icons/logo--script.svg';
import discord from '../../../assets/icons/discord-brands.svg';
import twitter from '../../../assets/icons/twitter-brands.svg';


import './social.scss'

export default class Social extends Component {

    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
      };

    render() {

        const { alignItems, direction, justify } = this.state;

        return(

            <div className="social">

                <Grid 
                className="container-social"
                container>


                    <Grid item xs={3} sm={2} md={2} lg={1} className="box-social">
                    
                        <div className={"meetup"}>

                            <img src={meetup} alt="Logo meetup"/>
            
                        </div>

                    </Grid>

                    <Grid item xs={3} sm={2} md={2} lg={1} className="box-social">
                    
                        <div className={"discord"}>

                            <img src={discord} alt="Logo meetup"/>
        
                        </div>

                    </Grid>

                    <Grid item xs={3} sm={2} md={2} lg={1} className="box-social">
                    
                        <div className={"twitter"}>

                            <img src={twitter} alt="Logo meetup"/>
        
                        </div>

                    </Grid>

                </Grid>    

            </div>
        );
    }
}