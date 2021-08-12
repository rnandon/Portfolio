import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectImage from './ProjectImage/ProjectImage';

function Project() {
  return (
    <div>
      <Container>
        <Row>
            <ProjectTitle name={props.name} />
        </Row>
        <Row>
          <Col sm={12} md={5}>
            <ProjectImage imgSrc={props.imgSrc} />
          </Col>
          <Col sm={12} md={7}>
            <ProjectDescription description={props.description} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;

// {
//   "name": "",
//   "description": "",
//   "githubUrl": "",
//   "imgSrc": ""
// }