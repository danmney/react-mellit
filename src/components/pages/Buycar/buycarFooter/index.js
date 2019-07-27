import React,{Component} from "react"
import "./buycarFooter.scss"
class BuycarFooter extends Component{
    render(){
        return (
            <div className = "buycarFooter">
                <div className = "computed">
                    <div className = "title">
                        <span>共3件</span>
                        <span>金额 :</span>
                    </div>
                    <div className = "money">
                        <span>5598</span>
                        <span>元</span>
                    </div>
                </div>
                <div className = "continuneBuy">继续购物</div>
                <div className = "settlement">结算</div>
            </div>
        )
    }
}
export default BuycarFooter