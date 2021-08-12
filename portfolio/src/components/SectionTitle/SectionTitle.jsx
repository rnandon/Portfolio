import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    return (
        <div>
            <h1 className="separator-bar text-center display-4 col-xs-10 col-md-8 mx-auto">{props.sectionName}</h1>
        </div>
    );
}

export default SectionTitle;