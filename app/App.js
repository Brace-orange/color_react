import React from "react";
import Bar from "./Bar.js";

class App extends React.Component{
  constructor(){
      super();
       this.state={
         "r":100,
         "g":100,
         "b":123
       }

  }

  setColor(k,v){
        this.setState(
          {
            [k]:v
          }
        );
  }

  render(){
    return <div>
    <div className="bt">调色板</div>
    <div className="box" style={{"backgroundColor":`rgb(${this.state.r},${this.state.g},${this.state.b})`}}></div>
    {Object.keys(this.state).map((item,index)=>{
      return <Bar color={item} setColor={this.setColor.bind(this)} v={this.state[item]}></Bar>

    })}
    </div>
  }
}

export default App;
