import React, { Component } from 'react'; //1- import the {Component} or call React.Component below (class App extends React.Component)
import './App.css';


class App extends Component { //2- create the Class ps:Component is a property of the React library.

  constructor() { //3- call the constructor method
    super();

    this.state = {
      monsters: [
        { name: "Frankenstein", id: "n1" }, //a unique key is needed so REACT will know what element needs an update, so it just need to render that piece of html
        { name: "Dracula", id: "n2" },
        { name: "Zombie", id: "n3" }
      ]
    };

  }

  componentDidMount() { //mounting is when react puts components on the page, renders it in the DOM for the 1º time. When that happens, the block of code inside of it is called
    fetch('http://jsonplaceholder.typicode.com/users') //fecth is a js method. It will make an API request to the url, returning a PROMISE
    .then(response => response.json())//this makes the response readable for react in the form of json
    .then(users => console.log(users))
  }

//PS: everytime you see a MAP() function INSIDE OF RENDER, or a list of the SAME JSW elements in sequence, you'll need a KEY attribute


  render() { // render is a built in method that comes with React.Component
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => ( //the function passed in map as an argument will be returned in the place of each element
            <h1 key={monster.key}> {monster.name} </h1>
          ))
        }
      </div>
    );
  }

}

//between the {} we can render any JS we want. Ex: in line 17, in line 20



export default App;
