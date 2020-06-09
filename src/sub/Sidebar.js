import React from 'react';
import EdenLogo from './EdenLogo';
import '../css/Reset.css';
import '../css/Base.css';
import '../css/Sidebar.css';

class Sidebar extends React.Component {
	constructor(props){
		super(props);
		this.type = props.type;
		this.state = {
			"icons": ["Text", "Image", "Video", "Shape", "List/Graphs", "Templates", "Calendar" ],
		}
	}
	render(){
		const icons = this.state.icons.map(function(icon){
			return <li>{icon}</li>;
		});
		return (
			<div>
				<div className="sidebar">
					<div className="sidebar-logo">
						<EdenLogo />
					</div>
					<div className="variable-container">
						<ul>
							{icons}
						</ul>
					</div>
				</div>
			</div>
			);
		}
}

export default Sidebar;