import React, { Component} from 'react'

export default class deleteTable extends Component {

    componentWillUnmount(){
        this.props.hapusData();
    }
    
  render() {
    return (
      <div>deleteTable</div>
    )
  }
}
