import { SET_BOOKS } from "../actions/actionType";

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
