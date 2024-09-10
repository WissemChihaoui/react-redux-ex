// src/reducers/counterReducer.js
const initialState = {
    counters: [0, 0, 0], // Initialize with an array of counters
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counters: state.counters.map((count, index) =>
            index === action.payload ? count + 1 : count
          ),
        };
      case 'DECREMENT':
        return {
          ...state,
          counters: state.counters.map((count, index) =>
            index === action.payload ? count - 1 : count
          ),
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  