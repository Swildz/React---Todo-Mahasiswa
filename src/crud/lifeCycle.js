import React, { Component } from "react";
import SublifeCycle from './sublifeCycle'

export default class lifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      makanan: "Dashboard",
      data: {},
      tampilHalamanSub : false
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({
  //         data: json,
  //       });
  //     });
  // }

  ubahMakanan(value){
    this.setState({
      makanan: value
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan} </h2>
        {this.state.tampilHalamanSub && <SublifeCycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}
          <button onClick={()=> this.setState({tampilHalamanSub : !this.state.tampilHalamanSub})}>Change Name</button>
      </div>
    );
  }
}
