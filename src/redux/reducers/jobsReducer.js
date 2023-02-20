import { GET_JOBS } from "../actions";

const initialState = {
  results: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};
export default jobsReducer;
