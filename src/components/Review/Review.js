import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
 
class Review extends Component {
    goBack = () => {
        this.props.history.push('/comments')
    }

    handleClick = () => {
        if (this.props.reduxState.feedbackReducer.feeling === "" ||
        this.props.reduxState.feedbackReducer.understanding === "" ||
        this.props.reduxState.feedbackReducer.supported === "" ||
        this.props.reduxState.feedbackReducer.comments === "" 
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
        <div className='query'>
            <h1>Review Your Feedback</h1>
            <button onClick={this.handleClick}>Submit</button>
            <button onClick={this.goBack}>Back</button>
            <ul>
                <li>Feelings: {this.props.reduxState.feedbackReducer.feeling}</li>
                <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}</li>
                <li>Support: {this.props.reduxState.feedbackReducer.supported}</li>
                <li>Comments: {this.props.reduxState.feedbackReducer.comments}</li>
            </ul>

        </div>
    )
}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Review);