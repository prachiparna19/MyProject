import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

const Navigation = (props) => {
          return (
                    <Navbar inverse collapseOnSelect>
                              <Navbar.Header>
                                        <Navbar.Brand>
                                                  <NavLink to='/'>BookStore</NavLink>
                                        </Navbar.Brand>
                              </Navbar.Header>
                              <Nav>
                                        <NavItem><NavLink to='/'>Home</NavLink></NavItem>
                              </Nav>
                              <Nav >
                                        <NavItem>
                                                  <NavLink to='/cart'>Cart</NavLink>
                                        </NavItem>
                              </Nav>
                    </Navbar>
          )

}
export default Navigation