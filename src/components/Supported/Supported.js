import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Supported extends Component {

    state = {
        supported: ''
    }

    handleClick = () => {
        if ( this.state.supported === '' ) {
            alert("Please fill out all fields.")
            return;
        } else if 
        (this.state.supported > 5 || this.state.supported < 1) {
            alert("Plese rate betweeen 1 and 5")
            return ;
        } else 
        this.props.history.push('/comments') // BRINGS USER TO NEXT PAGE
        this.props.dispatch({ type: `SUBMIT_FEEDBACK`, payload: this.state })
        console.log(this.state);

    }
    handleChange = (event) => {
         
        this.setState({
            supported: event.target.value,
        })
    }

    goBack = () => {
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <main>
                <div className='query'>
                    <h1>How well are you being supported?</h1>
                    <button onClick={this.goBack}>Back</button>
                    <input type='number' min='1' max='5'
                        value={this.state.supported}
                        onChange={this.handleChange}>
                    </input>
                    <button onClick={this.handleClick}>Next</button>
                    </div>
                    <div>
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