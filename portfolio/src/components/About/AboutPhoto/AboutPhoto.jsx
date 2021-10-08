import React from 'react';
import image from './about_pic.jpg'

const AboutPhoto = () => {
    return (
        <div className="container">
            <img src={image} alt="Profile Pic" />
        </div>
    )
}

export default AboutPhoto;