import {ADD_GOODS} from "./const"
export default {
    //添加数据
    addGoods({details,success}){
        return dispatch=>{
            setTimeout(()=>{
                let goodsCars = getCars()
                let hasGoods = goodsCars.some(item=>{
                    if (item.goodId === details.goodId) {
                        item.num++
                        return true
                    }
                    return false
                })
                if (!hasGoods) {
                    details.num = 1
                    goodsCars.push(details)
                }
                //保存到后台
                localStorage.goodsCars = JSON.stringify(goodsCars)
                //派发数据
                dispatch({type:ADD_GOODS,goodsCars})
                success && success("加入购物车成功")
            },500)
        }
    },
}
 //以localStorage模拟后台
 function getCars(){
    return JSON.parse(localStorage.goodsCars?localStorage.goodsCars:"[]")
}