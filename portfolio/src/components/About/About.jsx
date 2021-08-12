import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import SectionTitle from '../SectionTitle/SectionTitle'
import AboutContents from './AboutContents/AboutContents';
import AboutPhoto from './AboutPhoto/AboutPhoto';

function About() {
  return (
    <div className="my-5">
      <SectionTitle sectionName="About" />
      <Container>
        <Row>
          <Col sm={12} md={5}>
            <AboutPhoto />
          </Col>
          <Col sm={12} md={7}>
            <AboutContents />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;