import dayjs from 'dayjs'
import 'dayjs/locale/es'

import upcomingEventCardBackgrounds from './constants'

dayjs.locale('es')

const getFormattedAddress = address => {
  const formattedAddress = address.replace(',', ',\n')
  return formattedAddress
}

const getCardBackground = id => upcomingEventCardBackgrounds[id % upcomingEventCardBackgrounds.length]

const hasPassed = date => {
  const dateToCompareTo = new Date(date)
  const today = new Date()
  // TODO: today is still upcomings
  const hasEventPassed = today > dateToCompareTo
  return hasEventPassed
}

const getChronologicallyOrderedEvents = events => {
  // TODO: change the name of this fn
  const reducer = (acc, val) => [
    ...acc,
    { ...val, hasPassed: hasPassed(val.date), date: getFormattedDate(val.date), time: getFormattedTime(val.date) },
  ]
  const filteredEvents = events.reduce(reducer, [])
  return filteredEvents
}

const getFormattedDate = date => {
  const formattedDate = dayjs(date).format('ddd D MMM')
  const prettierDate = formattedDate.replace('.', '')
  return prettierDate
}

const getFormattedTime = date => {
  const formattedTime = dayjs(date).format('H[:]mm [hs]')
  return formattedTime
}

const getFilteredEvents = events => {
  let pastEvents = [],
    upcomingEvents = []
  events.forEach(event => {
    if (event.hasPassed) {
      pastEvents.push(event)
    } else {
      upcomingEvents.push(event)
    }
  })
  return { pastEvents, upcomingEvents }
}

export { getCardBackground as default, getFormattedAddress, getChronologicallyOrderedEvents, getFilteredEvents }
