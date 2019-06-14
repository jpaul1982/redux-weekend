import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewBody extends Component {
    render() {
        return (
            <div className='review'>
                <h1>Review Your Feedback </h1>
                <ul className='reviewList'>
                    <li>Feelings:</li>
                    <li>Understanding:</li>
                    <li>Support:</li>
                    <li>Comments:</li>
                </ul>
            </div>


        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(ReviewBody);