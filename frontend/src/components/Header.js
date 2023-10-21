import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import {motion} from 'framer-motion'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg" data-bs-theme="dark" collapseOnSelect>
        <Container>
            <motion.div whileHover={{ scale: 1.1 }} >
          <Navbar.Brand className="navbar-brand" href="/">EventSite</Navbar.Brand></motion.div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
            <LinkContainer to="/cart">
                 <Nav.Link><i className='fas fa-ticket'></i> My Events</Nav.Link>
              </LinkContainer>
            {userInfo? (
                 <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ): (<LinkContainer to="/login">
                <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header