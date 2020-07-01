import React from "react";
import LineChart from "./LineChart";
import "../../css/Mode.css";

class GraphMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}	
	}
	render() {
		return(
			<div>
				<LineChart />
				<h2 id="graphs-heading">GRAPHS</h2>
			</div>
			);
	}
}

export default GraphMode;