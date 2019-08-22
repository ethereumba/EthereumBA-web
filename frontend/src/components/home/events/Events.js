import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab'

import EventsCard from '../eventsCard/EventsCard'
import Slider from 'react-slick'
import Prev from '../../../assets/icons/chevron-left.svg'
import Next from '../../../assets/icons/chevron-right.svg'
import calendar from '../../../assets/icons/icon-calendar.svg'
import Social from '../social/Social'

import './events.scss'

const eventCards = [
  {
    id: 1,
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: '#3 Ethereum Buenos Aires: Smart Contracts Upgrades & DeFi',
    more: 'Ethereum is about bringing together like minds around...',
  },
  {
    id: 2,
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: '#4 Ethereum Buenos Aires: Escalando un mercado basado en Blockchain',
    more: 'How Plasma Tvs And Lcd Tvs Differ Lorem ipsum dol…',
  },
  {
    id: 3,
    imageCalendar: calendar,
    date: '07 FEB 2018',
    title: '#5 Ethereum Buenos Aires: Lightning + DeFi',
    more: 'Ethereum is about bringing together like minds around...',
  },
]

export default class Events extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <img src={Prev} alt="Atrás" />,
      nextArrow: <img src={Next} alt="Siguiente" />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    }
    return (
      <div className={'background-events'}>
        <div className={'events'}>
          <div className="card-events">
            <div className={'center'}>
              <p className={'title'}>Upcoming events</p>
            </div>

            <div className="cards-events">
              <Slider {...settings}>
                {eventCards.map(card => {
                  return (
                    <EventsCard
                      key={card.id}
                      id={card.id}
                      image={card.imageCalendar}
                      date={card.date}
                      title={card.title}
                      more={card.more}
                    />
                  )
                })}
              </Slider>
            </div>
          </div>

          <div className={'button-events'}>
            <Fab variant="extended" size="large" color="primary" aria-label="Add" className={'btn-view'} href={"/events"}>
              View All Events
            </Fab>
          </div>
        </div>
        {/*<Social />*/}
      </div>
    )
  }
}
