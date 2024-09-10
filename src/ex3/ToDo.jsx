// src/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
