import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Mat', age: 23 },
      { id: 'id3', name: 'Tom', age: 31 },
    ],
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 12 },
        { name: 'Tom', age: 31 },
      ]
    });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      // persons: this.state.persons.filter((person, idx) => idx !== index)
      persons: persons
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
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return <Person 
              name={ person.name } 
              age={ person.age }
              click={ this.deletePersonHandler.bind(this, idx) }
              key={ person.id } />;
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, this is my first react app!!</h1>
        <h1>another heading can be add only insight App</h1>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
