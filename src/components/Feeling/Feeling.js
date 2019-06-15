import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';




class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleClick = () => {
        this.props.history.push('/understanding'); // BRINGS USER TO NEXT PAGE
        this.props.dispatch({ type: `SUBMIT_FEEDBACK`, payload: this.state })
        console.log(this.state);
        this.setState({
            feeling:''
        })

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