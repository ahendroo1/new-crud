import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Tools from './components/Tools';
import Page_home from './components/Home_page';


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { messages: [] }; 
  // }
  
  render() {
    return (
      <div className="App">
        <Header />
          <Route exact path="/" component={Page_home} />
          <Route path="/tools" component={Tools}  />

        <Footer />
 
      </div>
    );
  }
}

export default App;
