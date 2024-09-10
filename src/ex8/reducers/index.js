// src/reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer'; // Import the data fetching reducer

const rootReducer = combineReducers({
  data: dataReducer, // Add your data reducer
  // other reducers go here
});

export default rootReducer;
