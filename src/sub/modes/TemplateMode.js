import React from "react";
import "../../css/Mode.css";

class TemplateMode extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div>
				<div className="template-header">
				TEMPLATES
				</div>
				<div id="temp00" className="template-container"></div>
				<div id="temp01" className="template-container"></div>
				<div id="temp02" className="template-container"></div>
				<div id="temp03" className="template-container"></div>
				<div class="clear"></div>
			</div>
			);
	}
}

export default TemplateMode;