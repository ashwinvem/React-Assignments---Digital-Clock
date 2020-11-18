import React, { Component, useState } from "react";
import "../styles/App.css";

class Date extends Component {
  constructor() {
    super();
    this.state = {
      clock: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    const time = new Date();
    const currentTime =
      time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    this.setState({
      clock: currentTime
    });
    this.timer = setInterval(
      () => this.setState({ clock: this.state.clock + 1 }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <p>{this.state.clock}</p>;
  }
}

export default Date;
