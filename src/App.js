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

    class SearchBar extends React.Component {
      render() {
        return <div className="search--box">
            <form >
              <label>
                <input type="search" ref="username" placeholder="Type Username + Enter" />
              </label>
            </form>
          </div>;
      }
    }

    class FuckYou extends React.Component {
      render () {
        return <p className="App-intro">Btw, Fuck You</p>;
      }
    }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={gitlogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Git-React Viewahh</h1>
        </header>
        <FuckYou/>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
