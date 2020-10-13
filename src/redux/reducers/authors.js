import { SET_AUTHORS } from "../actions/actionType";
const initialState = {
  authors: [],
  newAuthorId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.payload,
      };
    default:
      return state;
  }
};
