import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { search }
  }

  handleInputChange = (event) => {
    this.setState({search: event.target.value})
  }

  render() {
    const { search } = this.state
    return (
      <div className="App">
        <input onChange={this.handleInputChange} value={search} />
      </div>
    );
  }
}

export default App;
