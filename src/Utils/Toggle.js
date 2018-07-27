import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    isToggled: false
  };

  toggle = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  };

  render() {
    const { children } = this.props;
    return children({
      isToggled: this.state.isToggled,
      toggle: this.toggle
    });
  }
}
