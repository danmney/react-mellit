import {REMOVE_GOODS,ADD_GOODS_NUM,SUBSTRACT,ADD_GOODS} from "./const"
import state from "./state"
import {fromJS} from "immutable"
const reducer = (preState = fromJS(state),action)=>{
    switch (action.type) {
        //添加数据
        case ADD_GOODS:
            return preState.set("goodsCars",action.goodsCars)
        //减数量
        case SUBSTRACT:
            return preState.set("goodsCars",action.goodsCars)
        //加数量
        case ADD_GOODS_NUM:
            return preState.set("goodsCars",action.goodsCars)
        //删除商品
        case REMOVE_GOODS:
            return preState.set("goodsCars",action.goodsCars)
        default:
            return preState
    }
}
export default reducer