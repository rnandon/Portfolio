import React from 'react';
import { Link } from 'react-router-dom';

const AboutContents = (props) => {
    if (props.type === "home"){
        return (
            <div>
                <p className="display-6 my-3">Hi, I'm Ryan! I'm glad you're here.</p>
                <p className="my-1">I'm a full stack developer with an insatiable desire to learn and create.
                Whether it's food, music, or tech, I always take the same approach- 
                start with the basics. I make sure that all the needs are met, then
                I add my signature with a high quality flourish that makes my creations
                stand out. I'm always thinking about ways to improve and expand on my work,
                and I love to take on a new challenge.</p>

                <p className="my-3">Grab a cup of coffee, take a look around. If you have any questions or
                would like to get to know me better, make sure to reach out <Link to="/contact">here.</Link></p>
            </div>
        )
    } else {
        return (
            <div>
                <p className="display-6 my-3">Hi, I'm Ryan! I'm glad you're here.</p>
                <p className="my-1">I'm a full stack developer with an insatiable desire to learn and create.
                Whether it's food, music, or tech, I always take the same approach- 
                start with the basics. I make sure that all the needs are met, then
                I add my signature with a high quality flourish that makes my creations
                stand out. I'm always thinking about ways to improve and expand on my work,
                and I love to take on a new challenge.</p>

                <p className="my-3">Grab a cup of coffee, take a look around. If you have any questions or
                would like to get to know me better, make sure to reach out <Link to="/contact">here.</Link></p>
            </div>
        )
    }
}

export default AboutContents;