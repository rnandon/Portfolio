import React from 'react';

import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import ProjectImage from './ProjectImage/ProjectImage';

function Project(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <ProjectTitle name={props.project.name} />
          </div>    
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <ProjectImage imgSrc={`./${props.project.imgSrc}`} />
          </div>
          <div className="col-sm-12 col-md-7">
            <ProjectDescription description={props.project.description} />
            <a href={props.project.githubUrl} className="btn btn-secondary">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

// {
//   "name": "",
//   "description": "",
//   "githubUrl": "",
//   "imgSrc": ""
// }