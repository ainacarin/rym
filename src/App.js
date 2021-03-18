import React, { Component } from "react";
import "./App.css";
// characters
import { default as characters } from "./data/characters.json";

//
export class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters.results,
    };
    // attach instance - Option B
    this.extractChaptersNumber = this.extractChaptersNumber.bind(this);
  }

  // Option B
  extractChaptersNumber(chapterList) {
    const chapterNumbersList = chapterList.map((chapter) => {
      return <li>{chapter.split("/").slice(-1)}</li>;
    });
    return chapterNumbersList;
  }

  render() {
    return (
      <div>
        {this.state.characters.map((char, i) => {
          // Option A
          // return <CharacterCard title="Char" name={char.name} state={char.state} gender={char.gender} chapters={this.extractChaptersNumber(char.episode)} />
          // Option B
          return (
            <CharacterCard
              title="Char"
              name={char.name}
              state={char.state}
              gender={char.gender}
              chapters={this.extractChaptersNumber(char.episode)}
            />
          );
        })}
      </div>
    );
  }
}

// Card Characters Component
export class CharacterCard extends Component {
  constructor(props) {
    super(props);
    // define state: props that change
    this.state = {
      // before state
      state: this.props.state,
      // chapters where the character is - Option A
      chapters: this.props.chapters,
      // gender and name are inmmutables
      // var for communication with father
      son: true,
      characters: characters.results,
    };
    // attach context kill function into var
    // this.kill = this.kill.bind(this); // it is not necessary with arrow functions
  }

  // state to change father prop
  setApp = (param) => {
    this.setState({ son: param });
  };

  render() {
    // card definition
    return (
      <div>
        <div>
          {/* communication father-son */}
          <App setApp={this.setApp} title={this.props.title}></App>
        </div>
        <div className="card">
          {/* define props in component declaration */}
          <h2 className="char-name">{this.props.name}</h2>
          {/* can change, so, use state value */}
          <p>{this.state.state}</p>
          <p>{this.props.gender}</p>
          {this.state.son ? "true" : "false"}
          {/* can change, so, use state value */}
          {/* Option A */}
          {/* <ul>{this.state.chapters.map( (episode, i) => {
            return <li>{episode}</li>
          })}</ul> */}
          {/* Option B */}
          <ul>{this.props.chapters}</ul>
          <div>
            <label forname="state-input">Change character state:</label>
            <input
              name="state-input"
              className="state-input"
              onChange={this.changeState}
            ></input>
          </div>
          <div>
            <button
              className="input-div"
              // events params
              onClick={this.setPredefState.bind(this, "Init state")}
            >
              Change to Init State
            </button>
          </div>
          <button className="kill-button" onClick={this.kill}>
            KILL
          </button>
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
  kill = (event) => {
    this.setState({ state: "Dead" });
  };

  changeState = (event) => {
    // get user state

    // option A
    // const newState = event.target.value;
    // display change state
    // this.setState({state: newState});

    // Option B
    this.setState({ state: event.target.value });
  };

  setPredefState = (param, event) => {
    this.setState({ state: param });
  };
}

export class App extends Component {
  // communicating with father
  componentDidMount() {
    this.props.setApp(false);
  }

  render() {
    return (
      <div className="rym">
        {/* display title prop */}
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
