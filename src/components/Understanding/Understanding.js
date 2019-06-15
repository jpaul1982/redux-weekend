import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleClick = () => {
        this.props.history.push('/supported') // BRINGS USER TO NEXT PAGE
        this.props.dispatch({ type: `SUBMIT_FEEDBACK`, payload: this.state })
        console.log(this.state);

    }
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        })
    }

    render() {
        return (
            <main>
                <div className='query'>
                    <h1>How well are you understanding the content?</h1>
                    <input type='number' min='1' max='5'
                        value={this.state.understanding}
                        onChange={this.handleChange}>
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

export default connect(mapReduxStateToProps)(Understanding);