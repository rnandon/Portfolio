import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image from './about_pic.jpg'

const AboutPhoto = () => {
    return (
        <Container>
            <Image src={image} fluid alt="Profile Pic" />
        </Container>
    )
}

export default AboutPhoto;