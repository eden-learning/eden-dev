import React from 'react';
import '../css/ModeProject.css';

class ModeProject extends React.Component {
	constructor(props){
		super(props);
		this.theMode = this.props.mode;
		this.state = {
			"visible" : true,
		};
	}
	render(){
		return (
			<div>
				<div className="mode-project-container">
					{`Mode: ${this.theMode}`}
				</div>
			</div>
			);
	}
}

export default ModeProject;

/**
*
*   This Component is a child of Sidebar, which is a child of Project the Parent of all of 
*   the Project-Demo components
*/
