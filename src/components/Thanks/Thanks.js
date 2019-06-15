import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thanks extends Component {

    handleClick = () => {
        this.props.history.push('/');
        this.props.dispatch({
            type: `CLEAR_STATE`,
            payload: this.setState({

            })
        })
    }

    render() {
        return (
            <main>
                <div>
                    <h1>Feedback!</h1>
                </div>
                <div>
                    <h2>Thank You! </h2>
                    <button onClick={this.handleClick}>Leave New Feedback</button>
                </div>
            </main>

        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Thanks);