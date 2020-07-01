import React from 'react';
import '../../css/Mode.css';

class ImageMode extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}
	render() {
		return (
				<div>
					<h1 id="image-heading">Image</h1>
					<input id="image-input" placeholder="upload image" type="file"/>
					<button id="image-save" type="submit">Save</button>
					<div id="image-preview">
						<h3>Image Preview Goes Here</h3>
					</div>
				</div>
			);
	}
}

export default ImageMode;