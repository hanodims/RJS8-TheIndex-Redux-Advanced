import { combineReducers } from "redux";
import authorsReducers from "./authors";
import booksReducers from "./books";

const rootReducer = combineReducers({
  rootAuthor: authorsReducers,
  rootBook: booksReducers,
});

export default rootReducer;
