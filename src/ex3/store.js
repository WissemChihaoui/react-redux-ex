// src/store.js
import { createStore } from 'redux';

// Initial state and reducer
const initialState = {
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { text: action.payload, completed: false }] };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(todoReducer);

export default store;
