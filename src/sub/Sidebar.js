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
			"mode": 0,
			"icons": ["Text", "Image", "Video", "Shape", "List/Graphs", "Templates", "Calendar" ],
		}
	}
	render(){
		const icons = this.state.icons.map(function(icon, index){
			console.log(index);
			if (index == this.state.mode){
				return <li className="mode-on">{icon}</li>;
			}
			else {
				return <li data-mode={index} onClick={ () => this.setState({mode : index})} >{icon}</li>;
			}
		}, this);
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