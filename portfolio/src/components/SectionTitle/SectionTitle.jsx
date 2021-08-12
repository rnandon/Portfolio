import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    return (
        <div>
            <h1 className="separator-bar text-center display-4 col-xs-12 col-md-6 mx-auto">{props.sectionName}</h1>
        </div>
    );
}

export default SectionTitle;