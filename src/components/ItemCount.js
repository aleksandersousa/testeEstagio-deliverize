import React, { Component } from "react"
import '../styles/ItemCount.css'

import {RiSubtractFill, RiAddFill} from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'

export default class ItemCount extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handleClickAdd() {
    this.setState(prevState => {return {count: prevState.count + 1}})
  }
  
  handleClickMinus() {
    this.setState((prevState) => {
      return prevState.count > 0 ? {count: prevState.count - 1} : {count: prevState.count}
    })
  }

  render() {
    return(
      <div className="item-count">
        <IconContext.Provider value = {{ className: "minus-icon" }}>
          <div>
            <RiSubtractFill 
              onClick={this.handleClickMinus.bind(this)} 
              style={this.state.count === 0  ? {color: "#AEB6C1"} : {color: "#D80000"}}
            />
          </div>
        </IconContext.Provider>
        {this.state.count}
        <IconContext.Provider value = {{ className: "add-icon"}}>
          <div>
            <RiAddFill onClick={this.handleClickAdd.bind(this)} />
          </div>
        </IconContext.Provider>
      </div>
    )
  }
}
