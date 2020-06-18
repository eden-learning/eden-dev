import React from 'react';
import '../css/Reset.css';
import '../css/Base.css';
import '../css/TopControl.css';

import TrashIcon from "./TrashIcon";
import InfoIcon from "./InfoIcon";
import AccountIcon from "./AccountIcon";

class TopControl extends React.Component {
    	constructor(props) {
	    	super(props);
		    this.type = props.type;
		    this.state = {
		    	"user":"",
		    	"logged-in"	:"no"
		    };
	    }
		render() {
			return (
				<div>
					<nav>
						<div className="tc-container">
							<div className="horizontal-list">
								<div className="tc-trash">
									<TrashIcon />
								</div>
								<div className="tc-project">
									<div className="base-round-x-box base-center-text" id="project-div">X</div>
								</div>
								<div className="tc-info">
									<InfoIcon />
								</div>
								<div className="tc-user">
									<AccountIcon />
								</div>
							</div>
						</div>
					</nav>
				</div>

				)
		}
	}					

	export default TopControl;