import React from 'react';
import '../css/Reset.css';
import '../css/Base.css';
import '../css/TopControl.css';

import TrashIcon from "./TrashIcon";
import InfoIcon from "./InfoIcon";
import ProjectIconTC from "./ProjectIconTC"

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
									<ProjectIconTC />
								</div>
								<div className="tc-info">
									<InfoIcon />
								</div>
								<div className="tc-user"></div>
							</div>
						</div>
					</nav>
				</div>

				)
		}
	}					

	export default TopControl;