import  React,{Component} from "react"
import "./contentMobile.scss"
import Group from "../../../../../models/Group"
import {NavLink} from "react-router-dom"
class ContentMobile extends Component{
    componentDidMount(){
        this.props.getRecommendMobile()
        
    }
    //获取更多手机产品
    hasMoreProduce = ()=>{
        let {recommendMobilePages,recommendMobilelimit} = this.props
        this.props.hasMoreProduces(recommendMobilePages,recommendMobilelimit)
    }
    //渲染模板
    renderRecommendGoods(){
        let {recommendGoods} = this.props
        if (!recommendGoods) return false
        return recommendGoods.map(item=>{
            return (
                <NavLink 
                    key = {item.goodId}
                    to = {"/details/" + item.goodId}
                    className = "mobile">
                    <div className = "mobileiImg">
                        <img style = {{width:"100%"}} alt = "" src = {item.smlImgUrl} />
                    </div>
                    <div className = "text_desc">
                        <span className = "title">{item.title}</span>
                        <span className = "desc">{item.sales}</span>
                        <span className = "price">￥{item.price}</span>
                        <button>立即购买</button>
                    </div>
                </NavLink>
            )
        })
    }
    render(){
        return (
            <div className = "content_mobile">
                <img style={{width:"100%"}} alt = "" src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39186a0006b5e01d5a96c7c4190e4d38.jpg?thumb=1&w=720&h=440"/>
                <div className = "recommend_mobile">
                    {this.renderRecommendGoods()}
                </div>
                <div className = "mobile-hasmore">
                     {this.props.hasMore?<div onClick = {this.hasMoreProduce} className = "hasmore">更多小米手机产品</div>
                     :<div className = "hasmore">没有更多小米手机产品了...</div>}
                </div>
            </div>
        )
    }
}
export default Group(ContentMobile,{
    reducer:"home",
    states:["recommendGoods","recommendMobilePages","recommendMobilelimit","hasMore"]
})