import React, { Component } from 'react'

class BoxItem extends Component {
  constructor(props){
    super(props)
    this.state ={
      color: this.props.colorlist[Math.floor(Math.random()*this.props.colorlist.length)],
      click: 0,
    }

  }


  colorChanger = (props) => {
    var colorlist = this.props.colorlist
    var { click, color} = this.state
    click=Math.floor(Math.random()*colorlist.length)+1
    // click++
    this.setState({click: click%colorlist.length, color: colorlist[click-1]});
  }

  render() {
    var sectionStyle ={
      background : this.state.color
    }
    return(
      <div style={sectionStyle} className="clickbox" onClick={this.colorChanger.bind(this)}><h1>{this.state.color}</h1></div>
    )
  }
}
export default BoxItem
