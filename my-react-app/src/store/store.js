import { applyMiddleware, createStore } from "redux"
import weatherAppReducer from "./reducer.js"
import thunk from 'redux-thunk'

const store = createStore(weatherAppReducer, applyMiddleware(thunk))

export default store
