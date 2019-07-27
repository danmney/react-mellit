import home from "./home/reducer"
import {combineReducers} from "redux-immutable"
import buycar from "./buycar/reducer"

const reducer = combineReducers({
    home,
    buycar
})
export default reducer