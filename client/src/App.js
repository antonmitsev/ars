import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
          
          this.setState({ response: JSON.stringify(res) });

        }
      )
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:3001/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<div>Response:
	  <p>
	    {this.state.response}
          </p>
	</div>
      </div>
    );
  }
}

export default App;
