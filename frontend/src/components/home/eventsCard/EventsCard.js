import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import './eventsCard.scss';

const EventsCard = ({ image, date, title, more }) => (

    <Grid item xs={12} sm={6} md={4} lg={4}>
    <div className="card-home">
    <Card className="card card-shadow">
        <CardContent>
        <Typography
            className="container-date"
            color="textSecondary"
            gutterBottom>
            <img src={image} alt="icon calendar" />
    
            <p className="date">{date}</p>
         
        </Typography>
        <Typography className="title-card" variant="h5" component="h2">
            <p>{title}</p>
        </Typography>
        <Typography className="more">
            <p>{more}</p>
        </Typography>
        </CardContent>
    </Card>
        </div>
    </Grid>

)

export default EventsCard