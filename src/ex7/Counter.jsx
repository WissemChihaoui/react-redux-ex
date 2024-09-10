// src/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import hooks

const Counter = () => {
  const dispatch = useDispatch();

  // Access the counters array from the Redux state
  const counters = useSelector((state) => state.counters); 

  // Increment counter function
  const incrementCounter = (index) => {
    dispatch({ type: 'INCREMENT', payload: index });
  };

  // Decrement counter function
  const decrementCounter = (index) => {
    dispatch({ type: 'DECREMENT', payload: index });
  };

  // Ensure counters is defined before calling map
  if (!counters) {
    return <div>No counters available</div>;
  }

  return (
    <ul>
      {counters.map((count, index) => (
        <li key={index}>
          <span>{count}</span>
          <button onClick={() => incrementCounter(index)}>Increment</button>
          <button onClick={() => decrementCounter(index)}>Decrement</button>
        </li>
      ))}
    </ul>
  );
};

export default Counter;
