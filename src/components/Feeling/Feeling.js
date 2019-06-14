import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Feeling.css';



class Feeling extends Component {

    handleClick = () => {
        this.props.history.push('/feeling') // change to next component
    }                                        //Feeling should be home page

    render() {
        return (
            <main>
                <div className='query'>
            <h1>How are you feeling today?</h1>
            <input type='number'></input><button onClick={this.handleClick}>Next</button>

                </div>
                <div className='review'>
                    <h1>Review Your Feedback </h1>
                    <ul className='reviewList'>
                        <li>Feelings:</li>
                        <li>Understanding:</li>
                        <li>Support:</li>
                        <li>Comments:</li>
                    </ul>

                </div>
            </main>
        )
    }
}

const mapReduxStateToProps = (reduxState) =>({
    reduxState
  })

export default connect(mapReduxStateToProps)(Feeling);