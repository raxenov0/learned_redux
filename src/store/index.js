import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { CashReducer } from "./cashReducer"
import { Reducer } from "./customerReducer"



export const rootReducer = combineReducers({
    users: Reducer,
    cash: CashReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))