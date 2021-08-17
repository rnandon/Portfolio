import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HeaderNavbar.css';
import ContactModal from '../Contact/ContactModal'

function HeaderNavbar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="me-0 pe-0" sticky="top" >
      <Container className="me-0 pe-0" fluid>
        <Navbar.Brand href="#Home">Ryan Nance-Donaldson</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project One</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Project Two</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project Three</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">All Projects</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <ContactModal />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;