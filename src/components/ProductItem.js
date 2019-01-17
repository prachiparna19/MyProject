import React from 'react'
import AddBtn from './AddButton'
import RemoveBtn from './RemoveButton'
import { Image } from 'react-bootstrap'

import './style.css'


const ProductItem = (props) => {
          return (
                    <div className='product-list-item'>
                              <Image
                                        height={200}
                                        width={130}
                                        title={props.product.name}
                                        src={`/products/${props.product.image}`}
                                        rounded />
                              <h3>{props.product.name}</h3>
                              <div>{props.product.description}</div>
                              <div>${props.product.price}</div>
                              <div>
                                        <AddBtn
                                                  cartItem={props.cartItem}
                                                  product={props.product}
                                                  addToCart={props.addToCart}
                                        />

                                        {
                                                  props.cartItem
                                                            ? <RemoveBtn
                                                                      cartItem={props.cartItem}
                                                                      product={props.product}
                                                                      removeFromCart={props.removeFromCart}
                                                            />
                                                            : null
                                        }

                              </div>
                    </div>
          )
}

export default ProductItem