import React from 'react'
import '../styles/Navigation.css'

import logo from '../assets/images/logo.png'
import NavigationMenu from './NavigationMenu'
import { MdKeyboardArrowLeft, MdReorder } from 'react-icons/md'
import { IconContext } from 'react-icons'

export default function Navigation() {
  return(
    <div className="navigation">
      <IconContext.Provider value={ {className:"back-icon"} }>
        <div className="navigation__icon">
          <MdKeyboardArrowLeft/>
        </div>
      </IconContext.Provider>
      <img src={logo} alt="logo" className="logo" />
      <NavigationMenu />
      <IconContext.Provider value={ {className:"reorder-icon"} }>
        <div className="navigation__icon">
          <MdReorder/>
        </div>
      </IconContext.Provider>
    </div>
  )
}
