import React from 'react'
import Products from '../components/Products'
import data from '../data/products.json'


export default function Homepage(props) {
          return (
                    <div>
                              <div class="jumbotron text-center">
                                        <h1>Book Store</h1>
                                        <p>A store for your reading</p>
                              </div>
                              <Products products={data.products} />
                    </div>

          )

}