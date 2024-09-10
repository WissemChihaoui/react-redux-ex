// src/store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import redux-thunk
import rootReducer from './reducers'; // Import the root reducer

// Create the Redux store and apply thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
