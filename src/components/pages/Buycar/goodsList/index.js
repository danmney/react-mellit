import React,{Component} from "react"
import "./goodsList.scss"
import {withRouter} from "react-router-dom"
import Group from "../../../../models/Group"
import {Checkbox} from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
class GoodsList extends Component{
    onChange(val){
        
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
                        <div className = "img"><img alt = "" src = {item.smlImgUrl}/></div>
                        <div className = "desc">
                            <span className = "title">{item.title}</span>
                            <span className ="price">售价：{item.price}元</span>
                            <div className = "btn">
                                <span>-</span>
                                <span>{item.num}</span>
                                <span>+</span>
                            </div>
                        </div>
                        <div className = "remove"><span className = "fa fa-trash-o"></span></div>
                    </div>
                    <div className = {"goods-btom "+item.goodId}>
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