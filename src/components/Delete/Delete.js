import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Delete extends Component {
    handleClick = () => {
        axios({
            method: 'DELETE',
            url: '/' + this.props.feedback.id
        }).then(() => {
            axios({
                method: 'GET',
                url: '/admin'
            }).then((response) => {
                console.log(response.data);
                this.props.dispatch({ type: 'SET_ADMIN_PAGE', payload: response.data });
            });
        })


    }


    render() {
        return (
            <li >
                <br />
                <span className='userId'>Feedback User: {this.props.feedback.id}<button onClick={this.handleClick}>D</button><br /></span>
                Feeling: {this.props.feedback.feeling} <br />
                Understandng: {this.props.feedback.understanding}<br />
                Supported: {this.props.feedback.supported}<br />
                Comments: {this.props.feedback.comments}<br />
                <br />
            </li>

        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Delete);