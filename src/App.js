// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './ex8/store';
import TodoList from './ex5/ToDo';
import Counter from './ex7/Counter';
import UserList from './ex8/UserList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Todo App</h1>
        <
          UserList />
      </div>
    </Provider>
  );
};

export default App;
