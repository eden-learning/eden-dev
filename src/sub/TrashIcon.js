import React, { useEffect } from "react";
import "../css/Icons.css";

import * as eva from "eva-icons";

function TrashIcon() {
  useEffect(() => {
    // add this line
    eva.replace();
  }, []);
  return (
		<div>
	        <i 
	          id="tc-trash-icon"
	          data-eva="trash-2-outline"
	          data-eva-animation="false"
	          data-eva-hover="false"
	          data-eva-infinite="false"
	        />
        </div>
  		);
}

export default TrashIcon;