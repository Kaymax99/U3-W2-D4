import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favReducer from "../reducers/favReducer";
import jobsReducer from "../reducers/jobsReducer";

const mainReducer = combineReducers({
  favourites: favReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
