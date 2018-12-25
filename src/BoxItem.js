import React, { Component } from 'react'

class BoxItem extends Component {
  constructor(props){
    super(props)
    this.state ={
      colorList: this.props.colorList,
      click: 0,
      color: this.props.colorList[Math.floor(Math.random()*this.props.colorList.length)]
    }
  }


  colorChanger = (props) => {
    // var color = this.props.colorlist[click]
    var {click, colorList, color} = this.state
    click=Math.floor(Math.random()*colorList.length)
    // click++
    this.setState({click: click%colorList.length, color: colorList[click]});
  console.log("color: ", this.state.color)
  }

  render() {

    var sectionStyle ={
      background : this.state.color
    }
    return(
      <div style={sectionStyle} className="clickbox" onClick={this.colorChanger}><h3>{this.state.color}</h3></div>
    )
  }
}
export default BoxItem
