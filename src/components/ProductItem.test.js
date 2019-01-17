import React from 'react'
import { shallow, configure } from 'enzyme'
import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProductItem from './ProductItem'
import AddBtn from './AddButton'
import RemoveBtn from './RemoveButton'

Enzyme.configure({ adapter: new Adapter() })

describe('Testing the <ProductItem /> Component', () => {
          let wrapper, _props
          _props = {
                    product: {
                              "id": 1,
                              "name": "To Kill a Mockingbird",
                              "description": "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                              "image": "mockingbird.jpg",
                              "price": 19.99
                    }
          }
          beforeEach(() => {
                    wrapper = shallow(<ProductItem {..._props} />)
          })
          it('render the component', () => {
                    expect(wrapper.length).toEqual(1)
          })

          it('should render 4 div areas in the Component', () => {
                    expect(wrapper.find('div').length).toEqual(4);
          })

          it('should render a Add Button everytime for each ProductItem', () => {
                    expect(wrapper.find(AddBtn).length).toEqual(1);
          })

          it('should NOT render the Remove Button when no items in the cart', () => {
                    expect(wrapper.find(RemoveBtn).length).toEqual(0);
          })

          it('should render the Remove Button when items present in the cart', () => {
                    const _props = {
                              product: {
                                        "id": 1,
                                        "name": "To Kill a Mockingbird",
                                        "description": "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                                        "image": "mockingbird.jpg",
                                        "price": 19.99
                              },
                              cartItem: [{
                                        "id": 1,
                                        "name": "To Kill a Mockingbird",
                                        "description": "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                                        "image": "mockingbird.jpg",
                                        "price": 19.99,
                                        "quantity": 2
                              }]
                    }
                    wrapper.setProps({ ..._props })
                    expect(wrapper.find(RemoveBtn).length).toEqual(1);
          })
})