import React from "react";
import "../../css/Mode.css";

class CalendarMode extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){
		return (
			<div>
				<div id="calendar-header">CALENDAR</div>
				<div id="calendar-container"></div>
			</div>
			);
	}
}

export default CalendarMode;