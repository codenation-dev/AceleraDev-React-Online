import { SET_USERS } from "./actionTypes";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return payload;

    default:
      return state;
  }
};
