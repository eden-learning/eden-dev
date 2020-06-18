import React, { useEffect } from "react";
import "../css/Icons.css";

import * as eva from "eva-icons";

function AccountIcon() {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
		<div>
	        <i 
	          id="tc-info-icon"
	          data-eva="umbrella-outline"
	          data-eva-animation="false"
	          data-eva-hover="false"
	          data-eva-infinite="false"
	        />
        </div>
  		);
}

export default AccountIcon;