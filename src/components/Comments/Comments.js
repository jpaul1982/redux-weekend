import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Comments extends Component {
    state = {
        comments: ''
    }
    handleClick = () => {
        if ( this.state.comments === '') {
            alert("Please fill out all fields.")
            return;
        } else 
        this.props.history.push('/review') // BRINGS USER TO NEXT PAGE
        this.props.dispatch({ type: `SUBMIT_FEEDBACK`, payload: this.state })  // dispatches an action that will fire off all reducers. 
        console.log(this.state); 
    }
    handleChange = (event) => {  // sets local state to targeted value
        this.setState({
            comments: event.target.value,
        })
    }
    goBack = () => {   
        this.props.history.push('/supported') 
    }
    render() {
        return (
            <main>
                <div className='reviewList'>
                    <h1>Any comments you want to leave?</h1>
                    <button onClick={this.goBack}>Back</button>
                    <textarea type='text' max='120' onChange={this.handleChange}
                        value={this.state.comments}>
                    </textarea>

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

export default connect(mapReduxStateToProps)(Comments);