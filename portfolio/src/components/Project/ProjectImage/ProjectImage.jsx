import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ProjectImage = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={props.imgSrc} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectImage;