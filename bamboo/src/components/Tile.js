import React from "react";

export default class Tile extends React.Component {
  // constructor() {
  //   super();
  //   this.name = 1;
  // }
  handleChange(e) {
    const tile = e.target.value;
    this.props.changeTile(tile);
  }
  
  render() {
    console.log(this.props.value);
    return (
        <button type="button" class="btn btn-primary" onClick={this.handleChange.bind(this)}>
        {this.props.value}
        </button>
    );
  }
}
