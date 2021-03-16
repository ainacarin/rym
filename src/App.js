import React, { Component } from "react";
import "./App.css";

// Card Characters Component
export class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // card definition
    console.log("render");
    return ( 
    <div className="card">
      <h2 className="char-name">Character name</h2>
      <p>State</p>
      <p>Gender</p>
      <p>Chapter</p>
    </div>
    );
  }

}


export class App extends Component {
  render() {
    return (
      <div className="rym">
        <h1>Rick y Morty</h1>
      </div>
    );
  }

}
