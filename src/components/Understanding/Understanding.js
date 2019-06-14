import React, { Component } from 'react';
import { connect } from 'react=redux';

class Understanding extends Component {
    render() {
        return (
            <main>
                <div className='query'>
            <h1>How well are you understanding the content?</h1>
            <input type='number' min='1' max='5'></input><button onClick={this.handleClick}>Next</button>

                </div>
                <div className='review'>
                    <h1>Review Your Feedback </h1>
                    <ul className='reviewList'>
                        <li>Feelings:</li>
                        <li>Understanding:</li>
                        <li>Support:</li>
                        <li>Comments:</li>
                    </ul>

                </div>
            </main>
        )
    }
}
 const mapReduxStateToProps = (reduxState) => ({
     reduxState
 })

export default connect(mapReduxStateToProps)(Understanding);