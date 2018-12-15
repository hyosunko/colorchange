import React, { Component } from 'react';
import './App.css';
import BoxItem from './BoxItem'
import BoxList from './BoxList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "",
      click: 0,
      boxNum:10,
      colors: ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]
      // colors : ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
    }
  }

  updateNumber(boxNum){
    this.setState({boxNum:boxNum})
  }

  handleChange(e) {
    this.state.updateNumber(e.target.value)
  }

  render() {
    console.log("App Color: ", this.state.colors)
    return (
      <div className="App">
      <h1>Color Change Box</h1>
      <BoxList colorlist={this.state.colors} boxNo={this.state.boxNum} />

      </div>
    );
  }
}

export default App;
