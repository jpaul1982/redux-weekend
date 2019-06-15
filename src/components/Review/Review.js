import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// handleClick - this will send the post request to server 
// with all data collected from review inputs. 



class Review extends Component {

    handleClick = () => {
        if (this.props.reduxState.feedbackReducer.feeling === "" ||
        this.props.reduxState.feedbackReducer.understanding === "" ||
        this.props.reduxState.feedbackReducer.supported === "" ||
        this.props.reduxState.feedbackReducer.commments === "" 
        ) {
            alert("please fill out all fields");
        } else 
        this.props.history.push('/thanks');
        axios({
            method: 'POST',
            url: '/',
            data: this.props.reduxState.feedbackReducer
        }).then((response) => {
            console.log(response)
        })
    }

render() {
    return (
        <>
            <h1>Review Your Feedback</h1>
            <button onClick={this.handleClick}>Submit</button>
            <ul>
                <li>Feelings: {this.props.reduxState.feedbackReducer.feeling}</li>
                <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}</li>
                <li>Support: {this.props.reduxState.feedbackReducer.supported}</li>
                <li>Comments: {this.props.reduxState.feedbackReducer.comments}</li>
            </ul>

        </>
    )
}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Review);