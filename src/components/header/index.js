import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
 
import { Navbar, Container, Icon } from 'rbx'
import LogoImage from '../../assets/images/logo-v1-horizontal.png'
import SearchBox from '../search_box'
import { showModal } from "../../actions"
import { FaCrosshairs } from 'react-icons/fa'

import "../../assets/styles/header.scss"

const Header = ({showModal}) => (
  <div className="top-navbar">
    <Container>
      <Navbar>
          <Navbar.Brand>
            <img alt="logo" src={LogoImage} />
          </Navbar.Brand>
 
          <Navbar.Menu>
            <Navbar.Segment align="end" as="div" className="navbar-item navbar-center">
              <SearchBox />
            </Navbar.Segment>
            <Navbar.Segment as="div" align="end">
              <Navbar.Item onClick={() => showModal('ADDRESS_MODAL')}>
                <Icon color="has-custom-black" >
                  <FaCrosshairs />
                </Icon>
                <p>Endereço</p>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
      </Navbar>
    </Container>
  </div>
)
 
const mapDispatchToProps = dispatch => bindActionCreators({ showModal }, dispatch)
 
export default connect(null, mapDispatchToProps)(Header)
