import { createStore, applyMiddleware, compose } from "redux";
import { moviesReducer } from "../reducer/movieReducer";
import { thunk } from "redux-thunk";
const redfun = compose(applyMiddleware(thunk));

//1-create store
export const store = createStore(moviesReducer, redfun);
