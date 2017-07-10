import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactsApp from './components/ContactsApp';
import Roaster from './components/Roaster';

class App extends Component {
  state = {
    contacts: []
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        contacts: [1,2,3,4]
      })
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ContactsApp contacts={this.state.contacts}/>
        </div>

        <Roaster days={[1]}/>
      </div>
    );
  }
}

export default App;
