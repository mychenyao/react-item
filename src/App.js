import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from "react-router-dom"
import './App.css';
import "./pages/style.css"
import axios from "axios"

Component.prototype.$http=axios
class App extends Component {
    constructor (props) {
        super(props);
       
    }
    componentDidMount(){
  
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
