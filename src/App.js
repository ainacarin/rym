import React, { Component } from "react";
import "./App.css";

// Card Characters Component
export class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // card definition
    return (
      <div>
        <div>
          <App title="R y M"></App>
          <App title="y Beth"></App>
        </div>
        <div className="card">
          {/* define props in component declaration */}
          <h2 className="char-name">Character name</h2>
          <p>State</p>
          <p>Gender</p>
          <p>Chapter</p>
        </div>
      </div>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div className="rym">
        {/* display title prop */}
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
