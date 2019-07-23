import {createStore,applyMiddleware} from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"//增强派发功能，就可以在函数的actionCreators进行ajax请求

const store = createStore(reducer,applyMiddleware(thunk))
export default store