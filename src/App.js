import React, { Component } from "react";
import "./App.css";

// Card Characters Component
export class CharacterCard extends Component {
  constructor(props) {
    super(props);
    // define state: props that change
    this.state = {
      // before state
      state: this.props.state,
      // chapters where the character is
      chapters: this.props.chapters,
      // gender and name are inmmutables
    };
    // attach context kill function into var
    this.kill = this.kill.bind(this);
  }
  render() {
    // card definition
    return (
      <div>
        <div>
          {/* communication father-son */}
          <App title={this.props.title}></App>
        </div>
        <div className="card">
          {/* define props in component declaration */}
          <h2 className="char-name">{this.props.name}</h2>
          {/* can change, so, use state value */}
          <p>{this.state.state}</p>
          <p>{this.props.gender}</p>
          {/* can change, so, use state value */}
          <p>{this.state.chapters}</p>
          <button className="kill-button" onClick={this.kill}>KILL</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // change character state after mount
    this.setState({ state: "Alive" });
  }

  /**
   * EVENTS
   */
  // Kill character
  kill() {
    this.setState({ state: "Dead" });
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
