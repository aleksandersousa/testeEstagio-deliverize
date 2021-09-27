import React from 'react'

import Ingredient from './Ingredient'
import '../styles/IngredientList.css'

import CheckBox from './CheckBox'

export default function IngredientList(props) {
  const { ingredients } = props

  const listItem = () => {
    if(ingredients[0] !== undefined) {
      return ingredients[0]['itens'].map((ingredient) => {
        return <Ingredient
          key = {ingredient['id']} 
          name = {ingredient['nm_item']} 
          price = {ingredient['vl_item']} />
      })
    }
  }

  const footerTitle = () => {
    if(ingredients[1]) {
      return ingredients[1]['group']
    }
  }

  return (
    <div className="ingredient-list">
      {listItem()}  
      <div className="ingredient-list__footer">
        <div className="ingredient-list__container">
          <span className="ingredient-list__title">{footerTitle()}</span>
        </div>
        <div className="checkbox">
          <CheckBox option = "Option 1" title = "Sim"/>
          <CheckBox option = "Option 2" title = "Não"/>
        </div>
      </div>
    </div>
  )
}
