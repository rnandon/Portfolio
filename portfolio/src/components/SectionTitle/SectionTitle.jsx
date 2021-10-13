import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    return (
        <div>
            <h1 className="separator-bar text-center display-4 col-xs-8 col-md-10 mx-auto my-5">{props.sectionName}</h1>
        </div>
    );
}

export default SectionTitle;