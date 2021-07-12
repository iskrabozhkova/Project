import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'


class App extends Component{
  state = {
    username: 'Maximilian'
  }
  usernameChangeHandler = (event) => {
      this.setState({username: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
          <UserInput 
          changed={this.usernameChangeHandler}
          currentName={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
      </div>
    )
  }
}



export default App;
