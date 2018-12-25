import React, { Component } from 'react';
import BoxItem from './BoxItem'

class Box extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const a=this.props.boxArray;
		return(
			<div className ="container">
				{a.map(i=>{return <BoxItem colorList={this.props.colorList} />})}
	      	</div>
			)
	}
}

export default Box;
