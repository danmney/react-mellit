import  React,{Component} from "react"
import {withRouter} from "react-router-dom"
import { NavBar, Icon } from 'antd-mobile'
import Group from "../../../models/Group"
import ParamMeter from "./Parammeter"
import "./details.scss"
import Buylist from "./buylist"
class Details extends Component{
    componentDidMount(){
       this.getDetail()
    }
    //获取id
    getDetail(){
        let {id} = this.props.match.params
        this.props.getDetails(id)
    }
    //渲染数据
    renderDetails(){
        let {details} = this.props
        if (!details) return false
        return (
            <div className = "detail-img">
                <img alt = "" src = {details.bigImgUrl}/>
                <p className = "title">{details.title}</p>
                <div className = "desc">{details.desc}</div>
                <div className = "price">￥{details.price}</div>
                <ParamMeter/>
                <div className = "salse">
                    <span>促销</span>
                    <span>></span>
                </div>
                <div className = "list-item">
                    <div className = "select">
                        <span>已选</span>
                        <span className = "span2">{details.title}</span>
                        <span>></span>
                    </div>
                    <div className ="address">
                        <span>送至</span>
                        <span  className = "span2">{details.address}</span>
                        <span>></span>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        let {details} = this.props
        return (
            <div className = "details">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    ></NavBar>
                {this.renderDetails()}
                <Buylist details = {details}/>
            </div>
        )
    }
}
export default withRouter(Group(Details,{
    reducer:"home",
    states:["details"]
}))