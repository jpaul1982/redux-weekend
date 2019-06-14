import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feeling.css';
import ReviewBody from '../ReviewBody/ReviewBody';




class Feeling extends Component {

    handleClick = () => {
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <main>
                <div className='query'>
                    <h1>How are you feeling today?</h1>
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

export default connect(mapReduxStateToProps)(Feeling);