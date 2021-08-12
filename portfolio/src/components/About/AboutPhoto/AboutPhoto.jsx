import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const AboutPhoto = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="./about_pic.jpg" fluid alt="Profile Pic" />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPhoto;