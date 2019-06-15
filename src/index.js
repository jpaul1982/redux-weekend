import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state = {}, action) => {
    if (action.type === `SUBMIT_FEEDBACK`) {
        console.log(action.payload);
        return { ...state, ...action.payload };
    } else if (action.type === `CLEAR_STATE`) {
        return {};
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
