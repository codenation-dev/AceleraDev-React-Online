import { createStore, combineReducers } from "redux";

import homeReducer from "../pages/Home/reducer";
import profileReducer from "../pages/Profile/reducer";

const reducers = combineReducers({
  users: homeReducer,
  profile: profileReducer
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
