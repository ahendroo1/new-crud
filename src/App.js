import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
// import './App.css';
//  css

import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import Movie from './components/Movie';
import Page_home from './components/Home_page';

// import fire from './fire';
// import firebase from 'firebase';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { messages: [] }; 
  // }
  
  render() {
    return (
      <div className="App">
        <Header />
          <Route exact path="/page_home" component={Page_home} />
          <Route path="/movie" component={Movie}  />

        <Footer />
 

      </div>
    );
  }
}

export default App;
