(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(7),l=a.n(n),i=(a(14),a(1)),c=a(2),s=a(4),u=a(3),d=a(5),h=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).colorChanger=function(e){var t=a.state,r=t.click,o=t.colorList;t.color;r=Math.floor(Math.random()*o.length),a.setState({click:r%o.length,color:o[r]}),console.log("color: ",a.state.color)},a.state={colorList:a.props.colorList,click:0,color:a.props.colorList[Math.floor(Math.random()*a.props.colorList.length)]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={background:this.state.color};return o.a.createElement("div",{style:e,className:"clickbox",onClick:this.colorChanger},o.a.createElement("h3",null,this.state.color))}}]),t}(r.Component)),m=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.boxArray;return o.a.createElement("div",{className:"container"},t.map(function(t){return o.a.createElement(h,{colorList:e.props.colorList})}))}}]),t}(r.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"button-container"},o.a.createElement("button",{onClick:this.props.addBox},"Add Box"),o.a.createElement("button",{onClick:this.props.removeBox},"Remove Box"))}}]),t}(r.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addBox=function(){var e=a.state.boxArray;e.length<20&&e.push(o.a.createElement(h,null)),a.setState({boxArray:e})},a.removeBox=function(){var e=a.state.boxArray;e.length>0&&e.pop(),a.setState({boxArray:e})},a.state={color:"",click:0,boxNum:3,boxArray:[o.a.createElement(h,null),o.a.createElement(h,null),o.a.createElement(h,null),o.a.createElement(h,null)],colors:["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("h1",null,"Color Change Box"),o.a.createElement("p",null,"click boxes to change colors")),o.a.createElement(b,{addBox:this.addBox,removeBox:this.removeBox}),o.a.createElement(m,{colorList:this.state.colors,boxArray:this.state.boxArray}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.6adac13d.chunk.js.map