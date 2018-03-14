import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./profile.css";

const API = "https://api.github.com/users";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search--box">
        <form onSubmit={this.handleForm.bind(this)}>
          {/* <label> */}
          <input
            type="search"
            ref="username"
            placeholder="Type Username + Enter"
          />
          {/* </label> */}
        </form>
      </div>
    );
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
        console.log(data.avatar_url);

        this.props.onChange(
          data.name,
          data.followers,
          data.public_repos,
          data.avatar_url,
          data.location
        );
        return data;
      })
      .catch(error => console.log("Oops! . There Is A Problem"));
  }
}

class HeaderSpinner extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">GitHub API fetch using React.js</h1>
      </header>
    );
  }
}

class Profile extends Component {
  state = {};
  render() {
    return <center>
        <figure className="snip1578">
          <img src={this.props.url} alt="" />
          <figcaption>
            <h3>{this.props.username}</h3>
            <h4>{this.props.location}</h4>
            <h5>{this.props.followers} Followers</h5>
            <h5>{this.props.repo} Public Repos</h5>
          </figcaption>
        </figure>
      </center>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "T'Challa",
      repo: 0,
      followers: "loads",
      url: "https://octodex.github.com/images/octobiwan.jpg",
      location: "Wakanda"
    };
  }

  changeName = (theBloodyName, follo, repp, url, location) =>
    this.setState({
      username: theBloodyName,
      followers: follo,
      repo: repp,
      url: url,
      location: location
    });

  render() {
    return (
      <div className="App">
        <HeaderSpinner />
        <SearchBar onChange={this.changeName} />
        <Profile
          username={this.state.username}
          repo={this.state.repo}
          followers={this.state.followers}
          url={this.state.url}
          location={this.state.location}
        />
      </div>
    );
  }
}

export default App;
