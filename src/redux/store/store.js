import { createStore , applyMiddleware,compose } from 'redux'
import { moviesReducer } from '../reducer/movieReducer'
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk'
const redfun = compose(applyMiddleware(thunk),composeWithDevTools())

//1-create store
export const store = createStore(moviesReducer,redfun);