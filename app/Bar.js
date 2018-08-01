import React from "react";

class Bar extends React.Component{
  constructor(props){
      super(props);
  }

  render(){

    return <div>
      <input
      type="range"
       min={0}
       max={255}
       value={this.props.v}
       onChange={(e) => {
         this.props.setColor(this.props.color,e.target.value)
       }}
       />
       {this.props.v}
       <input
       type="number"
       min={0}
       max={255}
       value={this.props.v}
       onChange={(e) => {
         this.props.setColor(this.props.color,e.target.value)
       }
     }
       />
      </div>

  }
}


export default Bar;
