import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

import calendar from '../../../assets/icons/icon-calendar.svg';
import left from '../../../assets/icons/baseline-keyboard_arrow_left-24px.svg'
import rigth from '../../../assets/icons/baseline-keyboard_arrow_right-24px.svg'

import "./events.scss";


const eventCards = [
  {
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: 'Ethereum BSAS #3 Meetup',
    more: 'Ethereum is about bringing together like minds around...'
  },
  {
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: 'Ethereum BSAS #4 Meetup',
    more: 'How Plasma Tvs And Lcd Tvs Differ Lorem ipsum dol…'
  },
  {
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: 'Smart Contrats #5 Meetup',
    more: 'Ethereum is about bringing together like minds around...'
  } 

]

export default class Events extends Component {
  render() {

    return (
    <div className={"background-events"}>    
        <div className={"events"}>
            <div className="card-events">
                    <div className={"center"}>
                    <p className={"title"}>Build the decentralized future</p>
                    </div>

                    <div className="cards-events">
                    <Grid container className="card-container" spacing={6}>
                    
                    {
                        eventCards.map(card => {
                            return (
            
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <div className={"card-home"}>
                        <Card className="card card-shadow">
                            <CardContent>
                            <Typography
                                className="container-date"
                                color="textSecondary"
                                gutterBottom>
                                <img src={card.imageCalendar} alt="icon calendar" />
                        
                                <p className={"date"}>{card.date}</p>
                             
                            </Typography>
                            <Typography className="title" variant="h5" component="h2">
                                <p>{card.title}</p>
                            </Typography>
                            <Typography className="more">
                                <p>{card.more}</p>
                            </Typography>
                            </CardContent>
                        </Card>
                            </div>
                        </Grid>
                    
                    );
                    })
                }
                    </Grid>
                    </div>

                <div className={"button-left"} >
                  <a><img className={"left"} src={left} alt="boton izquierda" /></a>
                </div>
                <div className={"button-right"} >
                  <a><img className={"right"} src={rigth} alt="boton derecha"/></a>
                </div>

                </div>

                    <div className={"button-events"}>
                        <Fab
                        variant="extended"
                        size="large"
                        color="primary"
                        aria-label="Add"
                        className={"btn-view"}
                        >
                        View All Events
                        </Fab>
                    </div>  

        </div>
    </div>
    );
  }
}
