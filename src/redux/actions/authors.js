import { SET_AUTHORS } from "./actions/actionType";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

export const fetchAllAuthors = () => {
  return async (dispatch) => {
    const res = await instance.get("/api/authors/");

    const authors = res.data;
    dispatch({
      type: SET_AUTHORS,
      payload: authors,
    });
  };
};
