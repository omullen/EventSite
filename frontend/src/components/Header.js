import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand className="navbar-brand" href="/">EventSite</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link href="/cart"><i className='fas fa-ticket'> My Events</i></Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'> Log In</i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header