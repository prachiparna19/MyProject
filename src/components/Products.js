import React from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

import './style.css'

export function Products(props) {
          return <div className='product-listing'>
                    {
                              props.products.map((product) => {
                                        return <ProductItem product={product}
                                                  key={product.id}
                                                  cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                                                  addToCart={props.addToCart}
                                                  removeFromCart={props.removeFromCart} />
                              })
                    }
          </div>

}
export const mapStatetoProps = (state) => ({
          cart: state.cart
})

export function mapDispatchtoProps(dispatch) {
          return {
                    addToCart: (item) => {
                              dispatch({ type: 'ADD', payload: item })
                    },
                    removeFromCart: (item) => {
                              dispatch({ type: 'REMOVE', payload: item })
                    }
          }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Products)
