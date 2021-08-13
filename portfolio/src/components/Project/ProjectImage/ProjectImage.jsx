import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './ProjectImage.css'

const ProjectImage = (props) => {
    return (
        <Image src={require(`${props.imgSrc}`).default} className="limit-image" />
    )
}

export default ProjectImage;