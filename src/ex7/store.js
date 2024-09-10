// src/store.js
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer'; // Import the counter reducer

// Create the Redux store and pass the counter reducer
const store = createStore(counterReducer);

export default store;
