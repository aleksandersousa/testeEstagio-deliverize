import React from 'react'
import '../styles/Product.css'

//tive que baixar a foto porque a url do endpoint esta fora do ar
import ProductImage from '../assets/images/foto.png'

export default function Product(props) {
  const { title, description, priceDiscount, price} = props

  return (
    <div className="product">
      <img src={ProductImage} alt="product" className="product__image" />
      <span className="product__title">{title}</span>
      <span className="product__description">{description}</span>
      <div className="product__prices">
        <span className="product__discount">{
          Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' })
            .format(priceDiscount)
            .replace(/\s/g,'')
        }</span>
        <span className="product__price">{
          Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' })
            .format(price)
            .replace(/\s/g,'')
        }</span>
      </div>
    </div>
  )
}
