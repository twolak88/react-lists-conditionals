import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Mat', age: 23 },
      { name: 'Tom', age: 31 },
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // DONT USE THAT: this.state.persons[0].name = "Max2";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Mat2', age: 12 },
        { name: 'Tom', age: 31 },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 12 },
        { name: 'Tom', age: 31 },
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, this is my first react app!!</h1>
        <h1>another heading can be add only insight App</h1>
        <button
          style={ buttonStyle }
          onClick={ this.togglePersonsHandler }>Toggle Persons</button>
        { 
          this.state.showPersons ?
          <div>
            <Person
              name={ this.state.persons[0].name }
              age={ this.state.persons[0].age }
            />
            <Person
              name={ this.state.persons[1].name }
              age={ this.state.persons[1].age }
              click={ this.switchNameHandler.bind(this, 'Max3') /*recommended*/ }
              changed={ this.nameChangedHandler }
            >
              His hobbies: racing
            </Person>
            <Person
              name={ this.state.persons[2].name }
              age={ this.state.persons[2].age }
            />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
