import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Understanding extends Component {

    handleClick = () => {
        this.props.history.push('/supported')
    }

    render() {
        return (
            <main>
                <div className='query'>
                    <h1>How well are you understanding the content?</h1>
                    <input type='number' min='1' max='5'></input><button onClick={this.handleClick}>Next</button>
                    <ul className='reviewList'>
                        <ReviewBody />
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