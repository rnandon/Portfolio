import React from 'react';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar'
import './HeaderBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HeaderBar() {
  return (
    <Container fluid className="m-0 p-0">
          <HeaderNavbar />
      <Row className="my-5">
          <h1 className="display-1 text-center">Ryan Nance-Donaldson</h1>
          <h2 className="display-6 text-center text-muted">Full Stack Software Developer</h2>
      </Row>
    </Container>
  );
}

export default HeaderBar;