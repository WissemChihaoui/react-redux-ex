// src/actions/dataActions.js

// Thunk action creator to fetch data from an API
export const fetchData = () => {
    return async (dispatch) => {
      // Dispatch the initial request action
      dispatch({ type: 'FETCH_DATA_REQUEST' });
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
  
        // Dispatch the success action if the API call was successful
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      } catch (error) {
        // Dispatch the failure action if there was an error
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      }
    };
  };
  