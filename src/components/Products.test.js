import React from 'react'
import { shallow } from 'enzyme'
import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Products } from '../components/Products'
import ProductItem from '../components/ProductItem'

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the <Products /> component', () => {

          const products = [
                    {
                              id: 1,
                              name: "To Kill a Mockingbird",
                              description: "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                              image: "mockingbird.jpg",
                              price: 19.99
                    },
                    {
                              id: 2,
                              name: "All The Light",
                              description: "A blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II.",
                              image: "All-the-Light-We-Cannot-See.jpg",
                              price: 38.50
                    }
          ]
          let _props, wrapper
          _props = {
                    products: products,
                    cart: []
          }
          beforeEach(() => {
                    wrapper = shallow(<Products {..._props} />)
          })

          it('render the component', () => {
                    expect(wrapper.length).toEqual(1)
          })

          it('should call the ProductsItem as many items in the products array', () => {
                    const productLength = products.length
                    expect(wrapper.find(ProductItem).length).toEqual(productLength)
          })

})

