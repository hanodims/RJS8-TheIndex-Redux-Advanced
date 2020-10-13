import { SET_BOOKS } from "./actionType";
import axios from "axios";

export const fetchAllBooks = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://the-index-api.herokuapp.com/api/books/"
    );
    const books = res.data;
    dispatch({
      type: SET_BOOKS,
      payload: books,
    });
  };
};
