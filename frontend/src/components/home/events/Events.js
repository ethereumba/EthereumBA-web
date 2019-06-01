import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import EventsCard from '../eventsCard/EventsCard'

import calendar from '../../../assets/icons/icon-calendar.svg';
import left from '../../../assets/icons/baseline-keyboard_arrow_left-24px.svg'
import rigth from '../../../assets/icons/baseline-keyboard_arrow_right-24px.svg'

import "./events.scss";


const eventCards = [
  {
    id: 1,
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: 'Ethereum BSAS #3 Meetup',
    more: 'Ethereum is about bringing together like minds around...'
  },
  {
    id: 2,
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: 'Ethereum BSAS #4 Meetup',
    more: 'How Plasma Tvs And Lcd Tvs Differ Lorem ipsum dol…'
  },
  {
    id: 3,
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
                    <Grid container className="card-container">
                    
                    {
                        eventCards.map(card => {
                            return (
            
                              <EventsCard key={card.id} image={card.imageCalendar} date={card.date} title={card.title} more={card.more}/>
                    
                    );
                    })
                }
                    </Grid>
                    </div>

                <div className={"button-left"} >
                  <button><img className={"left"} src={left} alt="boton izquierda" /></button>
                </div>
                <div className={"button-right"} >
                  <button><img className={"right"} src={rigth} alt="boton derecha"/></button>
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
