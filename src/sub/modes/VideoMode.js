import React from "react";
import "../../css/Mode.css";

class VideoMode extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}
	render() {
		return (
				<div>
					<h1 id="video-heading">Video</h1>
					<input id="video-input" placeholder="upload video" type="file"/>
					<button id="video-save" type="submit">Save</button>
					<div id="video-preview">
						<h3>Video Preview Goes Here</h3>
					</div>
				</div>
			);
	}
}

export default VideoMode;

