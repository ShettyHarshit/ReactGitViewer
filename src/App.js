import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'https://api.github.com/users';

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
        let user = this.refs.username.value;
        console.log(user);
        this.refs.username.value = "";
        let url = `${API}/${user}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
          this.props.onChange(data.name, data.followers, data.public_repos);
          return data;
        })
        .catch(error => console.log("Oops! . There Is A Problem"));
      }
    }

    class FuckYou extends React.Component {
      render () {
        return <p className="App-intro">Btw, Fuck You</p>;
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

    class Profile extends Component {
      state = {}
      render() { 
        return <div className="App-intro">
            Hello {this.props.username}<br/>
            Followers:  {this.props.followers}<br/>
            Repositories: {this.props.repo}
            <img src={this.props.url} alt=""/>
          </div>;
      }
    }
     

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "you twat",
      repo: 0,
      followers: 0
    };
  }

  changeName = (theBloodyName, follo, repp) => this.setState({username: theBloodyName, followers: follo, repo: repp})

  render() {
    return <div className="App">
        <HeaderSpinner />
        <SearchBar onChange={this.changeName} />
        <Profile username={this.state.username} repo={this.state.repo} followers={this.state.followers} />
        <FuckYou />
      </div>;
  }
}

export default App;
