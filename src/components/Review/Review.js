import React, { Component } from 'react';
import { connect } from 'react-redux';

// handleClick - this will send the post request to server 
// with all data collected from review inputs. 

class Review extends Component {
    render() {
        return (
            <>
            <h1>Review Your Feedback</h1>
            <button onClick={this.handleClick}>Submit</button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Review);