import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Admin.css';


class Admin extends Component {

    componentDidMount() { // react Component method
        axios({
            method: 'GET',
            url: '/admin'
        }).then((response) => {
            console.log(response.data);
            this.props.dispatch({ type: 'SET_ADMIN_PAGE', payload: response.data });
        });
    }
    // handleClick = () => {
        
    // }

    render() {
        return (

            <ul>
                <span className='userId'>All Feedback: </span>
                <br />
                {this.props.reduxState.adminReducer.map(feedback => {
                    return (<li key={feedback.id}>
                        <br />
                        <span className='userId'>Feedback User: {feedback.id}<button>D</button><br /></span>

                        Feeling: {feedback.feeling} <br />
                        Understandng: {feedback.understanding}<br />
                        Supported: {feedback.supported}<br />
                        Comments: {feedback.comments}<br />
                        <br />

                    </li>);
                })}


                {/* <pre>
             {JSON.stringify(this.props.reduxState.adminReducer,null,2)}
         </pre> */}
            </ul>
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Admin);