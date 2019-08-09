import React from 'react'

import rigth from '../../../assets/icons/baseline-keyboard_arrow_right-24px.svg'
import left from '../../../assets/icons/baseline-keyboard_arrow_left-24px.svg'
import './buttonsCard.scss'

const ButtonsCard = () => (
  <div className="button-card">
    <div className={'button-left'}>
      <a>
        <img className={'left'} src={left} alt="boton izquierda" />
      </a>
    </div>
    <div className={'button-right'}>
      <a>
        <img className={'right'} src={rigth} alt="boton derecha" />
      </a>
    </div>
  </div>
)

export default ButtonsCard
