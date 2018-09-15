import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  onPlus = () => {
    let { number, alert } = this.state;
    number++;
    this.setState({ number })
  }

  onSub = () => {
    let { number } = this.state; 
    number--;
    this.setState({ number })
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
          <button onClick={this.props.add}>Add</button>
          <div>{this.props.number}</div>
          <button onClick={this.props.sub}>Sub</button>
          <h1>{this.props.actionText}</h1>
      </div>
    );
  }
}

export default Container(App);
