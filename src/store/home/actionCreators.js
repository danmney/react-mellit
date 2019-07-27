import {DETAILS,IS_SHOW,ACTIVE_INDEX,GET_RECOMMEND_MOBILE,HASMORE_RECOMMEND_MOBILE,HAS_MORE_MOBILE} from "./const"
import {Get} from "../../models/axios-utils"
export default {
    //改变activeIndex的值
    handelActive(index){
        index = index*1
        return dispatch=>{
            dispatch({type:ACTIVE_INDEX,index})
        }
    },
    //异步获取首页手机数据
    getRecommendMobile(callback){
        return dispatch=>{
            Get({
                url:"/mi/iphoneGoods",
                data:{
                    page:1,
                    limit:4
                }
            }).then(res=>{
                let recommendGoods = res.data.data.object_list
                dispatch({type:GET_RECOMMEND_MOBILE,recommendGoods})
            })
        }
    },
    //异步获取更多首页手机数据
    hasMoreProduces(recommendMobilePages,recommendMobilelimit){
        return dispatch=>{
            Get({
                url:"/mi/iphoneGoods",
                data:{
                    page:++recommendMobilePages,
                    limit:recommendMobilelimit
                }
            }).then(res=>{
                let total = res.data.data.total
                let recommendGoods = res.data.data.object_list;
                if (recommendMobilePages * recommendMobilelimit > total) {
                    dispatch({type:HAS_MORE_MOBILE,hasMore:false})
                   return false
                }
                dispatch({type:HASMORE_RECOMMEND_MOBILE,recommendGoods,recommendMobilePages})
            })
        }
    },
    //获取滚动高度
    backTop(e){
        let sTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (sTop>=400) {
            return {type:IS_SHOW,isShow:true}
        }else{
            return {type:IS_SHOW,isShow:false}
        }
    },
    //获取详情页数据
    getDetails(id){
        return dispatch=>{
           Get({
               url:"/mi/iphone_goods"
           }).then(res=>{
                let recommendGoods = res.data.data.object_list;
                let details = {}
                recommendGoods.forEach(item=>{
                    if (id * 1 === item.goodId) {
                        details = item
                        return false
                    }
                })
                dispatch({type:DETAILS,details})
           })
        }
    }
}