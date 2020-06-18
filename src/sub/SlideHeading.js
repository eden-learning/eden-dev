import React from 'react';
import '../css/Reset.css';
import '../css/Base.css';
import '../css/SlideHeading.css';

class SlideHeading extends React.Component {
    	constructor(props) {
	    	super(props);
	    	this.state = {
		    	"content" : props.content
		    }
	    }
		render() {
			return (
				<div className="SlideHeading">
					<h4>{this.state.content}</h4>
				</div>
				)
		}
	}

	export default SlideHeading;