import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authorsReducers from "./authors";
import booksReducers from "./books";

const rootReducer = combineReducers({
  rootAuthor: authorsReducers,
  rootBook: booksReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
