import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Article from './components/Article';
import Movie from './components/Movie';
import Food from './components/Food';
import Space_booking from './components/Space_booking';
// import fire from './fire';
// import firebase from 'firebase';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { messages: [] }; 
  // }

  // componentWillMount(){ 
  //   let messagesRef = fire.database().ref('data_lin').orderByKey().limitToLast(100); 
  //   messagesRef.on('child_added', snapshot => {
  //     let message = { text: snapshot.val(), id: snapshot.key }; 
  //     this.setState({ messages: [message].concat(this.state.messages) });
  //   }) 
  // }

  // addMessage(e){
  //   e.preventDefault();
  //   fire.database().ref('data_lin').push( this.inputEl.value ); 
  //   this.inputEl.value = '';
  // }
  
  render() {
    return (
      <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/space_booking" component={Space_booking} />
          <Route path="/food" component={Food} />
          <Route path="/movie" component={Movie}  />
          {/* <form onSubmit={this.addMessage.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el }/> <input type="submit"/>
          </form>
          <ul>
          {
          this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          } </ul> */}
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
