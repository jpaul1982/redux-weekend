import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const feelingReducer = (state = {}, action) => {
    if (action.type === `SUBMIT_FEELINGS`) {
        console.log(action.payload);
        return {...state, ...action.payload};
         } else if (action.type === `SUBMIT_UNDERSTANDING`) {
        console.log(action.payload);
        return {...state, ...action.payload};
    } else if (action.type === `SUBMIT_SUPPORTED`) {
        console.log(action.payload);
        return {...state, ...action.payload};
    } else if (action.type === `SUBMIT COMMENTS`) {
        console.log(action.payload);
        return {...state, ...action.payload};
    } 
    return state;
}
  const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
