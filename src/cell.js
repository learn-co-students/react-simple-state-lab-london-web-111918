import React, { Component } from 'react';

export default class Cell extends Component {


    state = {color: this.props.value}

    onClick = () => {
      this.setState({})
    }

    render() {
      return (
        <div className="cell" onClick={() => this.setState({color: '#333'})} style={{backgroundColor: this.state.color}}></div>
      )
    }
}
