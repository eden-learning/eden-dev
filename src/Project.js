import React from 'react';
import Sidebar from './sub/Sidebar';
import TopControl from "./sub/TopControl";
import './css/Reset.css';
import './css/Base.css';
import './css/Project.css';

function Project() {
  return (
    <div className="base-outer-wrapper">
      <Sidebar type="project" />
      <TopControl type="project" />
        <div className="base-content-area">
        </div>
    </div>
      );
}

export default Project;
