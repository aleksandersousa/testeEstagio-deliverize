import React, { useState } from 'react'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import '../styles/ListContainer.css'

import IngredientList from './IngredientList'
import ItemCount from './ItemCount'

export default function ListContainer(props) {
  const { ingredients } = props

  const delay = 5

  let toggle
  let closePopover

  const PopoverComponent = () => {
    const [popoverOpen, setPopoverOpen] = useState(false)
    
    closePopover = () => setTimeout(() => setPopoverOpen(false), delay * 1000)
    toggle = () => setPopoverOpen(!popoverOpen) 

    return (
      <UncontrolledPopover 
        placement="bottom"
        isOpen={popoverOpen} 
        target="shopping-cart" 
        toggle={toggle}
        className="popover"
      >
        <PopoverHeader className="popover__header">Adicionado com Sucesso</PopoverHeader>
        <PopoverBody className="popover__body">
          <span className="popover__title">Oferta Cheddar Bacon</span>
          <h3 className="popover__list-title">Ingredientes:</h3>
          <ul className="popover__list">
            <li>1 Carne 250gr</li>
            <li>2 Queijo Cheddar</li>
            <li>1 Bacon</li>
            <li>1 Molho Especial</li>
          </ul>
        </PopoverBody>
      </UncontrolledPopover>
    )
  }

  return (
    <div className="list-container" >
      <div className="list-container__header">
        <span className="list-container__title">Adicionar Ingredientes</span>
        <span className="list-container__description">Até 8 ingredientes.</span>
      </div>
      <IngredientList ingredients = {ingredients}/>
      <div className="list-container__footer">
        <ItemCount />
        {PopoverComponent()}
        <button className="button" onClick={() => {
          toggle()
          closePopover()
        }}>Adicionar</button>
      </div>
    </div>
  )
}
