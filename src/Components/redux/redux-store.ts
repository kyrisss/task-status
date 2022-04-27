import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleWare from "redux-thunk"
//@ts-ignore
import statusReducer from './statusReducer.ts'

let reducers = combineReducers({
    status: statusReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

type reducersType = typeof reducers
export type appStateType = ReturnType<reducersType>


export default store;