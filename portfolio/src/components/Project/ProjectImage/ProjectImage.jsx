import React from 'react';
import './ProjectImage.css'

const ProjectImage = (props) => {
    return (
        <img src={require(`${props.imgSrc}`).default} className="limit-image" alt="project thumbnail" />
    )
}

export default ProjectImage;