import { SET_USER, SET_REPOS, USER_LOADING } from "./actionType";

const initialState = {
  user: {},
  loading: true,
  repos: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case SET_REPOS:
      return { ...state, repos: payload };
    case USER_LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
