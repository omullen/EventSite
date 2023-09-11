import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg" data-bs-theme="dark" collapseOnSelect>
        <Container>
            <motion.div whileHover={{ scale: 1.1 }} >
          <Navbar.Brand className="navbar-brand" href="/">EventSite</Navbar.Brand></motion.div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <motion.div whileHover={{ scale: 0.95 }} >
              <Nav.Link href="/cart"><i className='fas fa-ticket'> My Events</i></Nav.Link></motion.div>
                <motion.div whileHover={{ scale: 0.95 }} >
              <Nav.Link href="/login"><i className='fas fa-user'> Log In</i></Nav.Link></motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header