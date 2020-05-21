import { SET_USER, SET_REPOS, USER_LOADING } from "./actionType";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function setRepos(repos) {
  return {
    type: SET_REPOS,
    payload: repos
  };
}

export function setLoading(loading) {
  return {
    type: USER_LOADING,
    payload: loading
  };
}
