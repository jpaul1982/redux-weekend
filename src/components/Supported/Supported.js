import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Supported extends Component {

    handleClick = () => {
        this.props.history.push('/comments')
    }

    render() {
        return (
            <main>
                <div>
                    <h1>How well are you being supported?</h1>
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

export default connect(mapReduxStateToProps)(Supported);