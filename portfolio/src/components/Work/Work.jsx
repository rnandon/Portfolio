import React from 'react';
import './Work.css';
import projects from '../../static/projects.json'
import '../SectionTitle/SectionTitle'
import SectionTitle from '../SectionTitle/SectionTitle';
import Project from '../Project/Project'

function Work() {
  return (
    <div>
      <SectionTitle sectionName="Work" />
      {projects.map( (project) => {
        return <Project project={project} />
      })}
    </div>
  );
}

export default Work;