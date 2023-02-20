export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const GET_JOBS = "GET_JOBS";

export const addToFavAction = (data) => ({
  type: ADD_TO_FAV,
  payload: data,
});

export const removeFromFavAction = (i) => ({
  type: REMOVE_FROM_FAV,
  payload: i,
});

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
