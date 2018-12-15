import React, { Component } from 'react';
import BoxItem from './BoxItem'

class Box extends Component{
	constructor(props){
		super(props)
	console.log("Box num", this.props.boxNo)
	}

	render(){
		const a=[]
		for(let i=0;i<this.props.boxNo;i++){
			a.push("")
		}

		return(
			<div className ="container">
				{a.map(i=>{return <BoxItem colorlist={this.props.colorlist} />})}
	      	</div>
			)
	}
}

export default Box;
