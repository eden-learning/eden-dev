import React from 'react';
import Sidebar from './sub/Sidebar';
import './css/Reset.css';
import './css/Base.css';
import './css/Project.css';

function Project() {
  return (
    <div className="base-outer-wrapper">
      <Sidebar type="project" />
        <div className="base-content-area">
        </div>
    </div>
      );
}

export default Project;
