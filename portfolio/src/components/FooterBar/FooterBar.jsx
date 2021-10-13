import React from 'react';
import './FooterBar.css';

function FooterBar() {
    return (
        <div className="container-fluid position-static bottom-0">
            <div className="row justify-content-center">
                <a href="https://www.linkedin.com/in/ryan-nd/" className="fa fa-linkedin btn m-5"></a>
                <a href="https://github.com/rnandon" className="fa fa-github btn m-5"></a>
                <a href="mailto:rnancedonaldson@gmail.com" className="fa fa-envelope btn m-5"></a>
            </div>
        </div>
    );
}

export default FooterBar;