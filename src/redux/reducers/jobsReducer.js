import {
  GET_JOBS,
  GET_JOBS_DEFAULT_OFF,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING_OFF,
  GET_JOBS_LOADING_ON,
} from "../actions";

const initialState = {
  results: [],
  isLoading: false,
  hasError: false,
  shownError: "",
  default: true,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        hasError: true,
        shownError: action.payload,
      };

    case GET_JOBS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_JOBS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case GET_JOBS_DEFAULT_OFF:
      return {
        ...state,
        default: false,
      };

    default:
      return state;
  }
};
export default jobsReducer;
