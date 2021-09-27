import React, { Component } from 'react'
import '../styles/Body.css'

import axios from 'axios'
import Product from './Product'
import ListContainer from './ListContainer'

const initialState = {
  id: 0,
  nm_product: '',
  description: '',
  vl_price: 0.0,
  vl_discount: 0.0,
  url_image: '',
  ingredients: []
}

export default class Main extends Component {
  state = { ...initialState}

  componentDidMount() {
    const baseUrl = 'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products'
    axios.get(baseUrl).then((response) => {
      this.setState(response.data[0])
    }).catch((error) => {
      console.log('error ocurred: ' + error)
    })
  }

  render() {
    return(
      <main className="main">
        <Product 
          title = {this.state.nm_product}
          description = {this.state.description}
          price = {this.state.vl_price}
          priceDiscount = {this.state.vl_discount}
        />
        <ListContainer ingredients = {this.state.ingredients}/>
      </main>
    )
  }
} 
