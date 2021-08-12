import React from 'react';
import './Work.css';
import {projects} from '../../static/projects.json'
import '../SectionTitle/SectionTitle'
import SectionTitle from '../SectionTitle/SectionTitle';

function Work() {
  return (
    <div className="App">
      <SectionTitle sectionName="Work" />
      {projects.map( (project) => {
        return <Project project={project} />
      })}
    </div>
  );
}

export default Work;