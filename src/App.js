import React, { Component } from 'react';
import './App.css';
import BoxItem from './BoxItem'
import BoxList from './BoxList'
import Button from './Button'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "",
      click: 0,
      boxNum:3,
      boxArray :[<BoxItem/>, <BoxItem/>, <BoxItem/>, <BoxItem/>],
      colors: ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]
    }
  }

  addBox =( ) =>{
    let {boxArray} = this.state
    if (boxArray.length < 20){
    boxArray.push(<BoxItem/>)}
    this.setState({boxArray: boxArray})
  }

  removeBox = ( )=>{
    let {boxArray} = this.state
    if (boxArray.length > 0){
    boxArray.pop()}
    this.setState({boxArray: boxArray})
  }

  render() {
    return (
      <div className="App">
        <div>
        <h1>Color Change Box</h1>
        <p>click boxes to change colors</p>
        </div>
        <Button  addBox={this.addBox} removeBox={this.removeBox} />
        <BoxList colorList={this.state.colors} boxArray={this.state.boxArray} />
      </div>
    );
  }
}

export default App;
