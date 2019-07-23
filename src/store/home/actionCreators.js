import {ACTIVE_INDEX} from "./const"
export default {
    //改变activeIndex的值
    handelActive(index){
        index = index*1
        return dispatch=>{
            dispatch({type:ACTIVE_INDEX,index})
        }
    }
}