import  React,{Component} from "react"
import "./buylist.scss"
import {withRouter,Link} from "react-router-dom"
import Group from "../../../../models/Group"
import { Toast} from 'antd-mobile';
class Buylist extends Component{
    //添加商品
    addGoods = ()=>{
        let {details} = this.props
        this.props.addGoods({
            details,
            success:res=>{
                Toast.success(res,1);
            }
        })
    }
    //获取商品数量
    getGoodsNum(){
        try {
            var goodsCars = this.props.goodsCars.toJS() 
        } catch (error) {
            goodsCars = this.props.goodsCars
        }
        let num = 0
        goodsCars.forEach(item=>{
            num += item.num
        })
        return num
    }
    render(){
        return (
            <div className = "buylist">
                <div className = "left">
                    <span onClick = {()=>this.props.history.goBack()}>
                        <i className = "fa fa-home"></i>首页
                    </span>
                    <Link to = "/buycar">
                        <i className = "fa fa-shopping-cart"></i>购物车
                    </Link>
                    <span className = "number">{this.getGoodsNum()}</span>
                </div>
                <div className = "right">
                    <button onClick = {this.addGoods} className = "btn">加入购物车</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Group(Buylist,{
    reducer:"buycar",
    states:["goodsCars"]
}))