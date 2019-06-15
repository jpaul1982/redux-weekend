import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const feelingReducer = (state = 0, action) => {
    if (action.type === `SUBMIT_FEELINGS`) {
        console.log(action.payload);
        return action.payload;

    } return state
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
