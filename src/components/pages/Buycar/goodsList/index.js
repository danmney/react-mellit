import React,{Component} from "react"
import "./goodsList.scss"
import {withRouter,NavLink} from "react-router-dom"
import Group from "../../../../models/Group"
import {Checkbox} from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
class GoodsList extends Component{
    //减商品
    subtract=(goodId)=>{
        this.props.subtract(goodId)
    }
    //增加商品数量
    addGoodsNum = (goodId)=>{
        this.props.addGoodsNum(goodId)
    }
    //删除商品
    removeGoods = (goodId)=>{
        this.props.removeGoods(goodId)
    }
    //点击显示隐藏
    onChange(val){
        let domStyle = document.getElementsByClassName(`${val}`)[0].getAttribute("style")
        if (domStyle === "display: block;") {
            document.getElementsByClassName(`${val}`)[0].setAttribute("style","display: none;")
        }
        if (domStyle === "display: none;") {
            document.getElementsByClassName(`${val}`)[0].setAttribute("style","display: block;")
        }
    }
    //渲染数据
    renderGoodslist(){
        //兼容immutable
       try {
        var goodsCars = this.props.goodsCars.toJS()
       } catch (error) {
            goodsCars = this.props.goodsCars
       }
       return goodsCars.map(item=>{
            return (
                <div key = {item.goodId} className = "goods">
                    <div className = "goods-top">
                        <div className = "select">
                            <CheckboxItem defaultChecked onChange={() => this.onChange(item.goodId)}>
                            </CheckboxItem>
                        </div>
                        <NavLink to = {"/details/" + item.goodId}  className = "img">
                            <img alt = "" src = {item.smlImgUrl}/>
                        </NavLink>
                        <div className = "desc">
                            <span className = "title">{item.title}</span>
                            <span className ="price">售价：{item.price}元</span>
                            {/* 商品加减 */}
                            <div className = "btn">
                                <span onClick = {this.subtract.bind(this,item.goodId)}>-</span>
                                <span>{item.num}</span>
                                <span onClick = {this.addGoodsNum.bind(this,item.goodId)}>+</span>
                            </div>
                        </div>
                        {/* 删除商品 */}
                        <div onClick = {this.removeGoods.bind(this,item.goodId)} className = "remove"><span className = "fa fa-trash-o"></span></div>
                    </div>
                    <div  style = {{display:"block"}} className = {"goods-btom "+item.goodId}>
                        <div className = "shield">
                            <span className = "fa fa-shield"></span>
                            <span>意外保护 99元起</span>
                            <span>选购</span>
                        </div>
                        <div className = "shield1">
                            <span className = "fa fa-shield"></span>
                            <span>延长保修服务 49元起</span>
                            <span>选购</span>
                        </div>
                    </div>
                </div>
            )
       })
    }
    render(){
        return (
            <div className = "goodslist">
                {this.renderGoodslist()}
            </div>
        )
    }
}
export default withRouter(Group(GoodsList,{
    reducer:"buycar",
    states:["goodsCars"]
}))