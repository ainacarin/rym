import React, { Component } from "react";
import "./App.css";

// Card Characters Component
export class CharacterCard extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {app: true};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("derived state from props");
    return null;
  }

  componentDidUpdate(prevsProps, prevState, snapshot) {
    console.log("did update");

  }

  componentWillUnmount(){
    console.log("will unmount");

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should update?");
    return false;
  }


  getSnapshotBeforeUpdate(prevsProps, prevState) {
    console.log("get snapshot before update");

  }

  render() {
    // card definition
    console.log("render");
    return ( 
    <div className="card">
      {/* a veces se mostrará y a veces no, según una variable*/}
      { this.state.app ? <App /> : <span></span> }
      <h2 className="char-name">Character name</h2>
      <p>State</p>
      <p>Gender</p>
      <p>Chapter</p>
    </div>
    );
  }

  componentDidMount() {
    console.log("did mount");
    this.setState.app  =false;
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

  componentDidMount(){
    console.log("app: did mount");

  }

  componentWillUnmount() {
    console.log("app: will unmount");
  }

}
