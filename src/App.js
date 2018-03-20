import React, { Component } from "react";
import logo from "./logo.svg";
import _ from "lodash";
import "./App.css";
import "./profile.css";

const API = "https://api.github.com/users";
const repos = "repos";

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
    this.refs.username.value = "";
    let url = `${API}/${user}`;
    let repourl = `${API}/${user}/${repos}`;


    fetch(repourl)
      .then(res => res.json())
      .then(data => {
        const list = _.map(data, 
          function(o) {
            let x = _.get(o, "name");
            return x;
          }
        );
        console.log(list);
        return list;
        });
      
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
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

class RepoList extends Component {
  state = {}
  render() { 
    // _.map({this.props.repos}, function name(params) {
    return <div>
      
    </div>;
    // })
  }
}

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "T'Challa",
      followers: "loads",
      url: "https://octodex.github.com/images/octobiwan.jpg",
      location: "Wakanda",
      repolist: []
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
        <RepoList repos={this.state.repolist}/>
      </div>
    );
  }
}

export default App;
