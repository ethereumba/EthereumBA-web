import React, { Component } from 'react'

import Button from '../../common/button/Button'
import EventCard from '../../common/eventCard/EventCard'
import Slider from 'react-slick'
import Prev from '../../../assets/icons/chevron-left.svg'
import Next from '../../../assets/icons/chevron-right.svg'
import Social from '../social/Social'
import './events.scss'

export default class Events extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <img src={Prev} alt='Atrás' />,
      nextArrow: <img src={Next} alt='Siguiente' />,
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

    const { events } = this.props

    return (
      <div className={'background-events'}>
        <div className={'events'}>
          <div className='card-events'>
            <div className={'center'}>
              <p className={'title'}>Our meetups</p>
            </div>

            <div className='cards-events'>
              <Slider {...settings}>
                {events.length > 0 &&
                  events.map(event => {
                    return (
                      <EventCard
                        key={event.id}
                        id={event.id}
                        date={event.date}
                        title={event.title}
                        hasPassed={event.hasPassed}
                      />
                    )
                  })}
              </Slider>
            </div>
          </div>

          <div className={'button-events'}>
            <Button title={'View All Events'} url={'/events'} />
          </div>
        </div>
      </div>
    )
  }
}
