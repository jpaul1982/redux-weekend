import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Admin.css';
import Delete from '../Delete/Delete';


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


    render() {
        return (

            <ul>
                <span className='userId'>All Feedback: </span>
                <br />
                {this.props.reduxState.adminReducer.map(feedback => {
                    return <Delete feedback={feedback} key={feedback.id}/>
                    
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