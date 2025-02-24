import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';

// Custom hook to fetch API resources and dispatch Redux actions
const useApiResource = <T>(
  fetchFunction: () => Promise<{ data: T }>,
  startAction: () => any, // Action to dispatch when fetching starts
  successAction: (data: T) => any, // Action to dispatch on success
  failureAction: (error: string) => any // Action to dispatch on failure
) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(startAction()); // Dispatch start action
      try {
        const response = await fetchFunction();
        dispatch(successAction(response.data)); // Dispatch success action with data
      } catch (err: any) {
        dispatch(failureAction(err.message || 'Failed to fetch data')); // Dispatch failure action with error
      }
    };

    fetchData();
  }, [fetchFunction, dispatch, startAction, successAction, failureAction]);
};

export default useApiResource;