import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
class App extends Component {
  state={
    lengthInput:0,
    inputInput:''
  }
  

  updateLengthInput = (event) =>{
    this.setState({
      inputInput: event.target.value,
      lengthInput:event.target.value.length,
    });
  }
  deleteLetter = (lIndex) =>{        
    const letters = [...this.state.inputInput];
    letters.splice(lIndex,1);
    this.setState({inputInput:letters.join('')});
  }

  render() {
    
    let listChar = null;
    const lettersState = [...this.state.inputInput];

    if (lettersState != undefined && lettersState != ''){
      listChar = lettersState.map((l,index) => {
        return <CharComponent key={Math.random()} letter={l} click={() => this.deleteLetter(index)}/>;
      })        
    }
    
    return (
      <div className="App">
        <p>{this.state.lengthInput}</p>
        <input type='text' onChange={this.updateLengthInput} value={this.state.inputInput}/>
        <ValidationComponent lengthInput={this.state.lengthInput}/>        
        {listChar}

        <br></br>
        <br></br>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
