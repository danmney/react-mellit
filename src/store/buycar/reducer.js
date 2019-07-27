import {ADD_GOODS} from "./const"
import state from "./state"
import {fromJS} from "immutable"
const reducer = (preState = fromJS(state),action)=>{
    switch (action.type) {
        //添加数据
        case ADD_GOODS:
            return preState.set("goodsCars",action.goodsCars)
        default:
            return preState
    }
}
export default reducer