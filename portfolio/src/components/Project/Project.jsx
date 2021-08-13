import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectImage from './ProjectImage/ProjectImage';

function Project(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <ProjectTitle name={props.project.name} />
          </Col>    
        </Row>
        <Row>
          <Col sm={12} md={5}>
            <ProjectImage imgSrc={`./${props.project.imgSrc}`} />
          </Col>
          <Col sm={12} md={7}>
            <ProjectDescription description={props.project.description} />
            <a href={props.project.githubUrl} className="btn btn-secondary">Github</a>
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