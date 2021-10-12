import React from 'react';
import image from './about_pic.jpg'

const AboutPhoto = () => {
    return (
        <div className="container-fluid">
            <img src={image} alt="Profile Pic" className="col-sm-10" />
        </div>
    )
}

export default AboutPhoto;