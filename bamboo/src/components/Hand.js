import React from "react";
import Tile from "./Tile";

export default class Hand extends React.Component {
  constructor(){
    super();
    this.state = {tile: [1,2]};
  }

  changeTile(tile){
    tiles = {tile: [2,3]};
    console.log(this.state);
    this.setState({tiles:tile});
  }
  
  render() {
    return (
            <div>
        <Tile changeTile={this.changeTile.bind(this)} value={this.state.tile[0]}/>
        <Tile changeTile={this.changeTile.bind(this)} value={this.state.tile[1]}/>
            </div>
    );
  }
}
