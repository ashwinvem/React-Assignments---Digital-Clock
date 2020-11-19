import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: new Date().toLocaleTimeString()
    };
  }
  updateClock() {
    this.setState({
      clock: new Date().toLocaleTimeString()
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.clock}</h3>
      </div>
    );
  }
}

export default App;
