import React from "react";
import PersonalList from "./PersonalList";
import Hand from "./Hand";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Tsutomu";
  }
  render() {
      return (
              <div>
              <Hand />
              <PersonalList />
              <h1>It's {this.name}!</h1>
              </div>
    );
  }
}
