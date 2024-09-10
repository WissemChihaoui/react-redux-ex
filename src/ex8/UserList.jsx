// src/components/UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/dataActions'; // Import the fetchData action

const UserList = () => {
  const dispatch = useDispatch();
  
  // Get the data, loading, and error states from the Redux store
  const { data, loading, error } = useSelector((state) => state.data);

  // Dispatch fetchData when the component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Handle loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render the list of users
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;