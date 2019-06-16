import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewBody extends Component {
    render() {
        return (
            <> 
            <div className='review'>
                <h1>Review Your Feedback </h1>
            </div>
            <div>
                <ul> 
                    <li>Feelings: {this.props.reduxState.feedbackReducer.feeling}</li>
                    <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}</li>
                    <li>Support: {this.props.reduxState.feedbackReducer.supported}</li>
                    <li>Comments: {this.props.reduxState.feedbackReducer.comments}</li>
                </ul>
            </div>
            </>

            
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewBody);