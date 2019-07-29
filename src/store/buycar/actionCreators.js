import {REMOVE_GOODS,ADD_GOODS_NUM,SUBSTRACT,ADD_GOODS} from "./const"
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
    //删除商品
    removeGoods(goodId){
        return dispatch=>{
            let goodsCars = getCars()
            if(window.confirm("确定要删除该商品吗？")){
                goodsCars = goodsCars.filter(item=>{
                    if (item.goodId === goodId) {
                       return false
                    }
                    return true
                })
            }
            localStorage.goodsCars = JSON.stringify(goodsCars)
            dispatch({type:REMOVE_GOODS,goodsCars})
        }
    },
    //增加商品数量
    addGoodsNum(goodId){
        return dispatch=>{
            let goodsCars = getCars()
            goodsCars.map(item=>{
                if (item.goodId === goodId) {
                    item.num++
                }
                return true
            })
            //保存更改后的数据到后台
            localStorage.goodsCars = JSON.stringify(goodsCars)
            //派发到reducer
            dispatch({type:ADD_GOODS_NUM,goodsCars})
        }
    },
    //减少商品数量
    subtract(goodId){
        return dispatch=>{
            let goodsCars = getCars()
            goodsCars = goodsCars.filter(item=>{
                if (item.goodId === goodId) {
                    item.num--
                    if (item.num < 1) {
                        item.num = 1
                        alert("商品数量为1，不能再减")
                    }
                }
                return true
            })
            //保存到后台
            localStorage.goodsCars = JSON.stringify(goodsCars)
            dispatch({type:SUBSTRACT,goodsCars})
        }
    }
}
 //以localStorage模拟后台
 function getCars(){
    return JSON.parse(localStorage.goodsCars?localStorage.goodsCars:"[]")
}