import React from 'react';
import EdenLogo from './EdenLogo';
import '../css/Reset.css';
import '../css/Base.css';
import '../css/Sidebar.css';
import '../css/Mode.css';

function TextMode(){
		return (
			<div className="text-mode">
				<label for="project-name">Project Name:</label>
				<input type="text" name="project-name"/>
				<label for="text-value">Body:</label>
				<input type="text" className="text-value" name="text-value" placeholder="Type your project description here"/>
			</div>
			);
}

function ImageMode(props){
		let thePreview = props.preview;
		let functionRef = props.ref;

	return (
		<div className="image-mode">
			<label for="image">Image</label>
			<input type="file" placeholder="upload an image" name="image" onChange={functionRef} />
			{thePreview}
			<h3>Image Upload Preview is The Broken</h3>
			<p>Something to do with .bind(this) being actually ()=> function and this now being able to use lexical context, and also React...</p>
		</div>

		);
}
class Sidebar extends React.Component {
	constructor(props){
		super(props);
		this.type = props.type;
		this.state = {
			"mode": 0,
			"icons": ["Text", "Image", "Video", "Shape", "List/Graphs", "Templates", "Calendar" ],
			"project": {
				image:[],
				name:"",
				body:""
			}
		}
	}
	fileChangeHandler(event){
		this.setState({
			selectedFile: event.target.files[0]
		})

		let reader = new FileReader();

		reader.onloadend = () => {
			this.setState({
				imagePreviewUrl :reader.result
			});
		}

		reader.readAsDataURL(event.target.files[0])
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
		const previewImageUrl = this.state.imagePreviewUrl;
		const changeFunction = this.fileChangeHandler;
		let contentSection;
		if (currentMode == 0) {
			contentSection = <TextMode />;
		}
		else if (currentMode == 1) {
			let preview;
			if (previewImageUrl) {
				preview = previewImageUrl;
			}
			contentSection = <ImageMode ref={changeFunction} preview={preview} />;
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