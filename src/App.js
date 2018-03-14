import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const API = 'https://api.github.com/users';

  let url = `https://api.github.com/users/ShettyHarshit`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
    })
    .catch((error) => console.log('Oops! . There Is A Problem'))

    class SearchBar extends React.Component {
      render() {
        return <div className="search--box">
         <form onSubmit={this.handleForm.bind(this)}>              
              {/* <label> */}
              <input type="search" ref="username" placeholder="Type Username + Enter" />
              {/* </label> */}
            </form>
          </div>;
      }

      handleForm(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        console.log(username);
        this.refs.username.value = "";
        // this.props.fetchProfile(username);
        // this.refs.username.getDOMNode().value = "";
      }
    }

    class FuckYou extends React.Component {
      render () {
        return <p className="App-intro">Btw, SIUUUUUUUUUUUUU</p>;
      }
    }

    class HeaderSpinner extends React.Component {
      render() {
        return <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Git-React Viewahh</h1>
          </header>;
      }
    }

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSpinner/>
        <FuckYou/>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
