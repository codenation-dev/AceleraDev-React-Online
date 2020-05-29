import { SET_LIKE } from "./actionTypes";

export function setLike(id) {
  return {
    type: SET_LIKE,
    payload: id
  };
}
