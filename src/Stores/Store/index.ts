import {createStore, applyMiddleware} from "redux"
import combineReducers from "../Reducers"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
export type RootState = ReturnType<typeof combineReducers>

// ApplyMiddleware -> doar accepta ca action-urile sa fie si functii, nu doar plain objects pe care le si apeleaza

const makeStore: any = (initialState: any ) => {
  return createStore(
    combineReducers, 
    initialState,
    applyMiddleware(thunk)
  )
}
const wrapper = createWrapper(makeStore); // { debug: true } as second param 
export default wrapper

export type AppDispatch = typeof makeStore.dispatch


