export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING_ON = "GET_JOBS_LOADING_ON";
export const GET_JOBS_LOADING_OFF = "GET_JOBS_LOADING_OFF";
export const GET_JOBS_DEFAULT_OFF = "GET_JOBS_DEFAULT_OFF";

export const addToFavAction = (data) => {
  return (dispatch, getState) => {
    const currentState = getState();

    if (
      currentState.favourites.content.findIndex((job) => job === data) === -1
    ) {
      dispatch({
        type: ADD_TO_FAV,
        payload: data,
      });
    }
  };
};

export const removeFromFavAction = (i) => ({
  type: REMOVE_FROM_FAV,
  payload: i,
});

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_JOBS_LOADING_ON,
      });

      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
          payload: "Response not ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_ERROR,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: GET_JOBS_LOADING_OFF,
      });
      dispatch({
        type: GET_JOBS_DEFAULT_OFF,
      });
    }
  };
};
