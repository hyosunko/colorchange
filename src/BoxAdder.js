import React, { Component } from 'react';
import BoxItem from './BoxItem';

class BoxAdder extends Component {
  constructor(props){
    super(props)
    this.state = {
      boxArray :[<BoxItem/>]
    }
  }

  addBox(){
    let {boxArray} = this.state
    if (boxArray.length < 5){
    boxArray.push(<BoxItem/>)}
    this.setState({boxArray: boxArray})
  }

  removeBox(){
    let {boxArray} = this.state
    if (boxArray.length > 1){
    boxArray.pop()}
    this.setState({boxArray: boxArray})
  }

  render(){


    return (
      <div>
      <div className="add">
      {this.state.boxArray}
      </div>
      <div className="btnToolbar Buttons" id="Buts">
      <div color="add" onClick={this.addBox.bind(this)}>+</div>
      // <div color="danger"  onClick={this.removeBox.bind(this)}></div>
      </div>
      </div>
      )
    }

}

export default BoxAdder