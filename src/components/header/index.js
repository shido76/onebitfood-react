import React from 'react'
 
import { Navbar, Container } from 'rbx'
import LogoImage from '../../assets/images/logo-v1-horizontal.png'
 
import "../../styles/header.scss"
 
const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <img alt="logo" src={LogoImage} />
      </Navbar.Brand>
    </Container>
  </Navbar>
)
 
export default Header