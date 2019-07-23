import {ACTIVE_INDEX} from "./const"
import state from "./state"
import {fromJS} from "immutable"
const reducer = (preState = fromJS(state),action)=>{
       switch (action.type) {
           case ACTIVE_INDEX:
              return preState.set("activeIndex",action.index)
           default:
              return preState
       }
}
export default reducer