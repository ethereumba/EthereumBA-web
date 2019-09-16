import React from 'react'
import PropTypes from 'prop-types'

import Address from '../../../assets/icons/events/icon-address.svg'
import AddressLight from '../../../assets/icons/events/icon-address-light.svg'
import './eventDetails.scss'

import { getFormattedAddress } from '../../../utils/helpers'

const EventAddress = ({ hasPassed, address }) => (
  <div className='event-address event-detail'>
    <img src={hasPassed ? AddressLight : Address} />
    <span>{getFormattedAddress(address)}</span>
  </div>
)

EventAddress.propTypes = {
  hasPassed: PropTypes.bool,
  address: PropTypes.string.isRequired,
}

EventAddress.defaultProps = {
  hasPassed: false,
}

export default EventAddress
