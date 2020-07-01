import React from 'react';
import EdenLogo from './EdenLogo';
import TextMode from './modes/TextMode';
import ImageMode from './modes/ImageMode';
import VideoMode from './modes/VideoMode';
import ShapeMode from './modes/ShapeMode';
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

		const currentMode = this.state.mode;

		let contentSection;
		if (currentMode == 0) {
			contentSection = <TextMode />;
		}
		else if (currentMode == 1) {
			contentSection = <ImageMode />;
		}
		else if (currentMode == 2) {
			contentSection = <VideoMode />;
		}
		else if (currentMode == 3) {
			contentSection = <ShapeMode />;
		}
	
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
				<div className="the-content">
					{contentSection}
				</div>
			</div>
			);
		}
}

export default Sidebar;