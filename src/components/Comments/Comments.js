import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Comments extends Component {


    render() {
        return (
            <main>
                <div className='query'>
                    <h1>Any comments you want to leave?</h1>
                    <input type='number' min='1' max='5'></input><button>Next</button>
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

export default connect(mapReduxStateToProps)(Comments);