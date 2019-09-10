import upcomingEventCardBackgrounds from './constants'

const getFormattedAddress = address => {
  const formattedAddress = address.replace(',', ',\n')
  return formattedAddress
}

const getCardBackground = id => upcomingEventCardBackgrounds[id % upcomingEventCardBackgrounds.length]

export { getCardBackground as default, getFormattedAddress }
