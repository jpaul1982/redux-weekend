import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';




class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleClick = () => {
        if ( this.state.feeling === '' ) {
            alert("Please fill out all fields.")
            return;
        } else if 
        (this.state.feeling > 5 || this.state.feeling < 1) {
            alert("Plese rate betweeen 1 and 5")
            return ;
        } else 
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

export default connect(mapReduxStateToProps)(Feeling);