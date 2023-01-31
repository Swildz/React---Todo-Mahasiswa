import React, { Component } from "react";

export default class sublifeCycle extends Component {
  componentWillUnmount() {
    this.props.ubahMakanan("Ahmad Siddiq")
  }
  render() {
    return <div>
      Component Sub lifeCycle
    </div>;
  }
}
