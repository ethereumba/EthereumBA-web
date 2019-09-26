import { shape, string, bool, number, array } from 'prop-types'



export const eventType = shape({
      date: string,
      description: string,
      hasPassed: bool,
      id: number,
      meetup_url: string,
      photos: array,
      place_city: string,
      place_number: string,
      place_street: string,
      sponsors: array,
      talks: array,
      time: string,
      title: string,
    })