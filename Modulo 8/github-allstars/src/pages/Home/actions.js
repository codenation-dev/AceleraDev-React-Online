import { SET_USERS } from "./actionTypes";

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: users
  };
}
