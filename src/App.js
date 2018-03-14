import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://api.github.com/users';

  let url = `https://api.github.com/users/ShettyHarshit`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.log('Oops! . There Is A Problem'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Viewahh</h1>
        </header>
        <p className="App-intro">
          Btw, Fuck You
        </p>
      </div>
    );
  }
}

export default App;
