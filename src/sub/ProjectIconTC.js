import React, { useEffect } from "react";
import "../css/Icons.css";

import * as eva from "eva-icons";

function ProjectIconTC() {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
		<div>
	        <i 
	          id="tc-project-icon"
	          data-eva="list-outline"
	          data-eva-animation="false"
	          data-eva-hover="false"
	          data-eva-infinite="false"
	        />
        </div>
  		);
}

export default ProjectIconTC;