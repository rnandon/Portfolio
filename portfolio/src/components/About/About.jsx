import React from 'react';
import './About.css';
import SectionTitle from '../SectionTitle/SectionTitle'
import AboutContents from './AboutContents/AboutContents';
import AboutPhoto from './AboutPhoto/AboutPhoto';

export default function About() {
  return (
    <div className="my-5">
        <SectionTitle sectionName="About" />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <AboutPhoto />
          </div>
          <div className="col-sm-12 col-md-7">
            <AboutContents />
          </div>
        </div>
      </div>
    </div>
  );
}