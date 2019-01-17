import React from 'react'
import { shallow } from 'enzyme'
import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { NavItem, Nav } from 'react-bootstrap'

import Navbar from './Navbar'

Enzyme.configure({ adapter: new Adapter() })

describe('Testing the Navbar Component', () => {
          it('renders a Navbar ', () => {
                    const wrapper = shallow(<Navbar />)
                    expect(wrapper.length).toEqual(1)
          })

          it('should render two NavItem for Home and Cart ', () => {
                    const wrapper = shallow(<Navbar />)
                    expect(wrapper.find(NavItem).length).toEqual(2)
          })
})