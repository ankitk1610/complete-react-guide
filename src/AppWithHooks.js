import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'



const app = () => {

 const [personState, setPersons] =  useState( {
    persons : [
      {
        "name" : 'Chandler', 'age' : '25'
      },
      {
        "name" : 'Joe', 'age' : '26'
      },
      {
        "name" : 'Ross', 'age' : '27'
      }
    ],
    // otherStates : "Hola!!"
  });


  const [otherState, setOtherState] = useState({
      otherStates: "Hola!!"
    })

  console.log(personState, otherState)

  const switchNameHandler = () => {
    setPersons({
      persons: [
        {
          "name": 'Monica', 'age': '25'
        },
        {
          "name": 'Pheobe', 'age': '26'
        },
        {
          "name": 'Rachel', 'age': '27'
        }
      ],

      // otherStates :personState.otherStates
    })
  }
  

        return ( <div className="App">
         <h1>Helllo World! How Are You?</h1>  <h2>I am good... </h2>

         <button onClick= {switchNameHandler}>Change Name</button>
         {/* <Person name="Ankit" age= "26"/>
         <Person name="Astha" age="32"/>
         <Person name= "Apurv" age="31"/>
         <Person name= "MSD" age= "38"> Captain!! </Person> */}


         <Person name = {personState.persons[0].name} age = {personState.persons[0].age} />
         <Person name = {personState.persons[1].name} age = {personState.persons[1].age} />
         <Person name = {personState.persons[2].name} age = {personState.persons[2].age} />

       </div>);

}


export default app;