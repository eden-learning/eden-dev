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
				<div className="shape-spacer">SHAPES</div>
				<div className="triangle"></div>
				<div className="square"></div>
				<div className="circle"></div>
			</div>
			);
	}
}

export default ShapeMode;