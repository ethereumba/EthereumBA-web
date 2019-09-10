import React from 'react'

import Address from '../../../assets/icons/events/icon-address.svg'
import AddressLight from '../../../assets/icons/events/icon-address-light.svg'
import './eventDetails.scss'

import { getFormattedAddress } from '../../../utils/helpers'

const EventAddress = ({ hasPassed, address }) => (
  <div className='event-address event-datail'>
    <img src={hasPassed ? AddressLight : Address} />
    <span>{getFormattedAddress(address)}</span>
  </div>
)

export default EventAddress
