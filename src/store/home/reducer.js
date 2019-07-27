import {DETAILS,IS_SHOW,ACTIVE_INDEX,GET_RECOMMEND_MOBILE,HASMORE_RECOMMEND_MOBILE,HAS_MORE_MOBILE} from "./const"
import state from "./state"
import {fromJS} from "immutable"
const reducer = (preState = fromJS(state),action)=>{
       switch (action.type) {
           case ACTIVE_INDEX:
              return preState.set("activeIndex",action.index)
            case GET_RECOMMEND_MOBILE:
               return preState.set("recommendGoods",action.recommendGoods)
            case HAS_MORE_MOBILE:
               return preState.set("hasMore",action.hasMore)
            case IS_SHOW :
               return preState.set("isShow",action.isShow)
            case DETAILS:
               return preState.set("details",action.details)
            case HASMORE_RECOMMEND_MOBILE:
                  return preState.set("recommendGoods",preState.get("recommendGoods").concat(action.recommendGoods))
                                 .set("recommendMobilePages",action.recommendMobilePages)
           default:
              return preState
       }
}
export default reducer