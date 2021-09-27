import React from 'react'
import '../styles/NavigationMenu.css'

import { IconContext } from "react-icons"
import {MdKeyboardArrowDown} from 'react-icons/md'
import {RiAccountCircleLine} from 'react-icons/ri'
import {HiOutlineSearch, HiOutlineShoppingCart} from 'react-icons/hi'

export default function NavigationMenu() {
  return(
    <div className="navigation-menu">
      <div className="navigation-menu__address">
        <div className="navigation-menu__texts">
          <span className="navigation-menu__title">Entrega</span>
          <span className="navigation-menu__description">R. Antonio Braune, 222</span>
        </div>
        <IconContext.Provider value={{ className: "arrowdown-icon" }}>
          <div>
            <MdKeyboardArrowDown />
          </div>
        </IconContext.Provider>
      </div>
      <div className="navigation-menu__search">
        <input 
          className="navigation-menu__input" 
          placeholder="Busque por estabelecimento ou produtos">
        </input>
        <IconContext.Provider value={{ className: "search-icon" }}>
          <div>
            <HiOutlineSearch />
          </div>
        </IconContext.Provider>
      </div>
      <div className="navigation-menu__user">
        <IconContext.Provider value={{ className: "accountcircle-icon" }}>
          <div>
            <RiAccountCircleLine />
          </div>
        </IconContext.Provider>
        <span className="navigation-menu__text">Entrar</span>
      </div>
      <div className="navigation-menu__bag">
        <IconContext.Provider value={{ className: "shoppingcart-icon" }}>
          <div className="navigation-menu__icon">
            <div className="navigation-menu__icon-number">1</div>
            <HiOutlineShoppingCart id="shopping-cart"/>
          </div>
        </IconContext.Provider>
        <span className="navigation-menu__text">Carrinho</span>
      </div>
    </div>
  )
}
