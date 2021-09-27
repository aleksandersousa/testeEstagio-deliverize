import React from 'react'
import '../styles/Ingredient.css'

import ItemCount from './ItemCount'

export default function Ingredient(props) {
  const { name, price } = props

  return (
    <div className="ingredient">
      <div className="ingredient__body">
        <div className="ingredient__description">
          <div className="ingredient__name">{name}</div>
          <div className="ingredient__price">{'+ ' + Intl.NumberFormat('pt-Br', { 
              style: 'currency', 
              currency: 'BRL',
            }).format(price).replace(/\s/g,'')
          }</div>
        </div>
        <ItemCount />
      </div>
      <div className="ingredient__line"></div>
    </div>
  )
}
