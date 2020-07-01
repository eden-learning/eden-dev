import React from 'react';
import '../../css/Mode.css';

const inputParsers = {
  name(input) {
    return input;
  },
  content(input) {
    return input.toUpperCase();
  }
};


class TextMode extends React.Component {
constructor(){
	super();
	this.state = {};
	//this.handleSubmit = this.handleSubmit.bind(this);
}

/*handleSubmit = (event) => {
	event.preventDefault();
	const form = event.target;
    const data = new FormData(form);

    for (let theName of data.keys()) {
    	const input = form.elements[name];
    	const parserName = input.dataset.parse;
    }

    if (parserName !== null) {
    	const parser = inputParsers[parserName];
    	const parsedValue = parser(data.get(name));
    	data.set(theName, parsedValue);
    }

    console.log(data);
}*/

render(){
	return (
		<div className="text-mode">
			<form name="textForm" id="text-form" >
				<label for="project-name">Project Name:</label>
				<input type="text" id="project-name" data-parse="name" name="projectName"/>
				<label for="text-value">Body:</label>
				<input type="text" id="text-value" className="text-value" data-parse="content" name="textV                 alue" placeholder="Type your project description here"/>
				<button type="submit">Save</button>
			</form>
		</div>
		);
	}
}

export default TextMode;