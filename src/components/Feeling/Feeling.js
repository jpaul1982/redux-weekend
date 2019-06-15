import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feeling.css';
import ReviewBody from '../ReviewBody/ReviewBody';
import { thisTypeAnnotation } from '@babel/types';




class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleClick = () => {
        this.props.history.push('/understanding'); // BRINGS USER TO NEXT PAGE
        this.props.dispatch({ type: `SUBMIT_FEELINGS`, payload: this.state })
        console.log(this.state);

    }
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
        })
    }

    render() {
        return (
            <main>
                <div className='query'>
                    <h1>How are you feeling today?</h1>
                    <input onChange={this.handleChange}
                        value={this.state.feeling} type='number' min='1' max='5'>
                    </input>
                    <button onClick={this.handleClick}>Next</button>
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