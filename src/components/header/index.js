import React from 'react'
 
import { Navbar, Container } from 'rbx'
import LogoImage from '../../assets/images/logo-v1-horizontal.png'
import SearchBox from '../search_box'

import "../../assets/styles/header.scss"

const Header = () => (
  <div className="top-navbar">
    <Container>
      <Navbar>
          <Navbar.Brand>
            <img alt="logo" src={LogoImage} />
          </Navbar.Brand>
 
          <Navbar.Menu>
            <Navbar.Segment align="right" as="div" className="navbar-item navbar-center">
              <SearchBox />
            </Navbar.Segment>
          </Navbar.Menu>
      </Navbar>
    </Container>
  </div>
)
 
export default Header