import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Article from './components/Article';
import Space_booking from './components/Space_booking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/space_booking" component={Space_booking} />
        <Footer />

        {/* <Button label="Primary" />
        <Button label="Secondary" className="ui-button-secondary" />
        <Button label="Success" className="ui-button-success" />
        <Button label="Info" className="ui-button-info" />
        <Button label="Warning" className="ui-button-warning" />
        <Button label="Danger" className="ui-button-danger" /> */}

          {/* <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} /> */}

          {/* <header className="App-headyer">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}

      </div>
    );
  }
}

export default App;
