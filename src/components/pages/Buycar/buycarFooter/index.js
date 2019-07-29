import React,{Component} from "react"
import "./buycarFooter.scss"
import Group from "../../../../models/Group"
import {withRouter} from "react-router-dom"
class BuycarFooter extends Component{
    //统计商品数量及总价
    staticstialNum(){
         //兼容immutable
         try {
            var goodsCars = this.props.goodsCars.toJS()
           } catch (error) {
                goodsCars = this.props.goodsCars
           }
        let total = {num:0,price:0}
        goodsCars.forEach(item=>{
            total.num += item.num
            total.price += item.price * item.num
        })
        return total
    }
    render(){
        return (
            <div className = "buycarFooter">
                <div className = "computed">
                    <div className = "title">
                        <span>共{this.staticstialNum().num}件</span>
                        <span>金额 :</span>
                    </div>
                    <div className = "money">
                        <span>{this.staticstialNum().price}</span>
                        <span>元</span>
                    </div>
                </div>
                <div onClick = {()=>{this.props.history.replace("/")}} className = "continuneBuy">继续购物</div>
                <div className = "settlement">结算</div>
            </div>
        )
    }
}
export default withRouter(Group(BuycarFooter,{
    reducer:"buycar",
    states:["goodsCars"]
}))