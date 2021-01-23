import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {
        "name": 'Chandler', 'age': '25'
      },
      {
        "name": 'Joe', 'age': '26'
      },
      {
        "name": 'Ross', 'age': '27'
      }
    ],
    otherStates: "Hola!!"
  }

     //eventHandler
  switchNameHandler = (newName,newAge) => {
    // DO NOT USE:  this.state.persons[0].name = "Monica"
    this.setState({
      persons: [
        {
          "name": newName, 'age': newAge
        },
        {
          "name": 'Pheobe', 'age': '26'
        },
        {
          "name": 'Rachel', 'age': '27'
        }
      ]
    })
  }




  render() {
    //     // return (
    //       // <div className="App">
    //       //   <h1>Helllo World! How Are You? I am good... </h1>
    //       // </div>
    // // Compiles to
    //       // return React.createElement('div', {className: "App"}, React.createElement('h1', null,'I am a React Element'), React.createElement('h2', null,'I am a React Child Element'));
    //     // );



    return (<div className="App">
      <h1>Helllo World! How Are You?</h1>  <h2>I am good... </h2>

      <button onClick={this.switchNameHandler.bind(this,'Ankit','24')}>Change Name</button>
      {/* <Person name="Ankit" age= "26"/>
         <Person name="Astha" age="32"/>
         <Person name= "Apurv" age="31"/>
         <Person name= "MSD" age= "38"> Captain!! </Person> */}

      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} 
      click = {this.switchNameHandler.bind(this,'App', '999')}
      />

      <Person 
      name={this.state.persons[1].name}
      age={this.state.persons[1].age}
      click = { () => this.switchNameHandler('Astha')}

      />
      
      <Person 
      name={this.state.persons[2].name}
      age={this.state.persons[2].age} />
    </div>);
  }
}





export default App;
