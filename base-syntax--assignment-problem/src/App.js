import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state={
    username:'joao'
  }

  updateUserName = (event) =>{
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const {username} = this.state;
    return (
      <div className="App">
        <UserInput  username={username} updateUserName={this.updateUserName}/>
        <UserOutput username={username}/>        
        <UserOutput username={username}/>        
      </div>
    );
  }
}

export default App;

