import React from 'react'
import { shallow } from 'enzyme'
import * as Enzyme from 'enzyme'
import Cartpage from './Cartpage'
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() });

describe('<Cartpage />', () => {
          it('renders an div area', () => {
                    const cart = shallow(<Cartpage />)
                    expect(cart.find('div').length).toEqual(1);
          })
})