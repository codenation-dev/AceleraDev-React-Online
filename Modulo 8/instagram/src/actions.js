import { SET_LIKE } from "./actionsTypes";

export function setLike(id) {
  return {
    type: SET_LIKE,
    payload: id
  };
}
