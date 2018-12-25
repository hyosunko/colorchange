import React, { Component} from 'react';

class Box extends Component{
	render(){
		return(
			<div className="button-container">
			    {/*add and remove buttons with function cneection*/}
				<button onClick={this.props.addBox}>Add Box</button>
				<button onClick={this.props.removeBox}>Remove Box</button>
			</div>
		)
	}
}

export default Box;