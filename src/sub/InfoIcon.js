import React, { useEffect } from "react";
import "../css/Icons.css";

import * as eva from "eva-icons";

function InfoIcon() {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
		<div>
	        <i 
	          id="tc-info-icon"
	          data-eva="info-outline"
	          data-eva-animation="false"
	          data-eva-hover="false"
	          data-eva-infinite="false"
	        />
        </div>
  		);
}

export default InfoIcon;