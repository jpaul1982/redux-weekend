import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import Feeling from '../Feeling/Feeling';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
         {/* MAKES FEELINGS ROUTE HOMEPAGE */}
         <Route path="/" exact component={Feeling}/>
      </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) =>({
  reduxState: reduxState
})

export default connect (mapReduxStateToProps) (App);