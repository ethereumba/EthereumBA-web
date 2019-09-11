import upcomingEventCardBackgrounds from './constants'

const getFormattedAddress = address => {
  const formattedAddress = address.replace(',', ',\n')
  return formattedAddress
}

const getCardBackground = id => upcomingEventCardBackgrounds[id % upcomingEventCardBackgrounds.length]

const hasPassed = date => {
  const dateToCompareTo = new Date(date)
  const today = new Date()
  // TODO: review this when dayjs is installed
  const hasEventPassed = today > dateToCompareTo
  return hasEventPassed
}

const getChronologicallyOrderedEvents = events => {
  const reducer = (acc, val) => [...acc, { ...val, hasPassed: hasPassed(val.date) }]
  const filteredEvents = events.reduce(reducer, [])
  return filteredEvents
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
