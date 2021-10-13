import React from 'react';
import home from './about_pic.jpg';
import profile from './profile.jpg';

const AboutPhoto = (props) => {
    const image = props.type === "home" ? home : profile;

    return (
        <div className="container-fluid">
            <img src={image} alt="Profile Pic" className="col-sm-10" />
        </div>
    )
}

export default AboutPhoto;