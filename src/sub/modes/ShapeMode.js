import React from 'react';
import "../../css/Shapes.css";

class ShapeMode extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
				<div className="triangle"></div>
			</div>
			);
	}
}

export default ShapeMode;