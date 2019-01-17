import React from 'react'
import { shallow, configure } from 'enzyme'
import * as Enzyme from 'enzyme'
import Homepage from './Homepage'
import Products from '../components/Products'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() })

describe('<Homepage /> Testing', () => {
          it('renders an div area', () => {
                    const cart = shallow(<Homepage />);
                    expect(cart.find('div').length).toEqual(2);
          })
          it('should call the Products Component', () => {
                    const cart = shallow(<Homepage />);
                    expect(cart.find(Products).length).toEqual(1);
          })
})