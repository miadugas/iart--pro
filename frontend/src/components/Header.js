import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" sticky="top" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">Tim Furlow Fine Art</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/signin">Sign In</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
    )
}

export default Header
