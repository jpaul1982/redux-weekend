import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Supported extends Component {

    state = {
        supported: ''
    }

    handleClick = () => {
        this.props.history.push('/comments') // BRINGS USER TO NEXT PAGE
        this.props.dispatch({ type: `SUBMIT_FEEDBACK`, payload: this.state })
        console.log(this.state);

    }
    handleChange = (event) => {
        this.setState({
            supported: event.target.value,
        })
    }

    render() {
        return (
            <main>
                <div>
                    <h1>How well are you being supported?</h1>
                    <input type='number' min='1' max='5'
                        value={this.state.supported}
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

export default connect(mapReduxStateToProps)(Supported);