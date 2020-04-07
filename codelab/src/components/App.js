import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Contact from './Contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  render(){
    return(
      <Contact/>
    )
  }
};

export default hot(module)(App);