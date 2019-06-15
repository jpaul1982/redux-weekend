import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <header  className="App-header">
            <h1  className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            <Link to='/' className="link">Home</Link>
          </header>
          <br />
          {/* MAKES FEELINGS ROUTE HOMEPAGE */}
          <Route path="/" exact component={Feeling} />
          {/* MAKES UNDERSTANDING ROUTE */}
          <Route path="/understanding" component={Understanding} />
          {/* MAKES SUPPORTED ROUTE */}
          <Route path="/supported" component={Supported} />
          {/* MAKES COMMENTS ROUTE */}
          <Route path="/comments" component={Comments} />
           {/* MAKES REVIEW ROUTE */}
           <Route path="/review" component={Review} />
             {/* MAKES THANKS ROUTE */}
             <Route path="/thanks" component={Thanks} />
        </div>
        {/* <pre>
        {JSON.stringify(this.props, null, 2)}
        </pre> */}
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState
})

export default connect(mapReduxStateToProps)(App);