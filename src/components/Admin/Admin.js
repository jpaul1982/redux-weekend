import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class Admin extends Component{

    componentDidMount() { // react Component method
        axios({
          method: 'GET',
          url: '/admin'
        }).then((response) => {
          console.log(response.data);
          this.props.dispatch({ type: 'SET_ADMIN_PAGE', payload: response.data});
        });
     }

    render() {
        return (
        
            <div>
                
        {this.props.reduxState.adminReducer.map(feedback => {
            console.log(feedback);
            
            return (<li key={feedback.id}>{feedback.rows}</li>);
        })}
          
{/*         
         <pre>
             {JSON.stringify(this.props.reduxState.adminReducer, null,2)}
        </pre> */}
    </div>
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Admin);