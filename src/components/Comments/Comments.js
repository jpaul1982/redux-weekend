import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBody from '../ReviewBody/ReviewBody';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleClick = () => {
        this.props.history.push('/review') // BRINGS USER TO NEXT PAGE
        this.props.dispatch({ type: `SUBMIT_SUPPORTED`, payload: this.state })
        console.log(this.state);

    }
    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }


    render() {
        return (
         
                <div>
                    <h1>Any comments you want to leave?</h1>
                    <input type='text' max='120'></input><button onClick={this.handleClick}>Next</button>
                    <ul className='reviewList'>
                        <ReviewBody />
                    </ul>

                </div>
            
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Comments);