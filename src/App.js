import React, { Component } from 'react';
import './App.css';
import Post from './Components/Post'
import Container from './Components/Container'

// Admin page
class App extends Component {
  render() {
    return (
    <div>
      <Container/>
     <Post style={{overflow:'hidden'}}/>
    </div>
    );
  }
}

export default App;