import React,{Component} from "react"
import "./index.scss"
//引入navs组件
import Navs from "./navs"
class Header extends Component{
    render(){
        return (
            //header
            <div className = "header">
                <div className = "header-top">
                    <div className = "logo">
                        <img alt = "" src = "http://img.lagou.com/thumbnail_300x300/image2/M00/06/E2/CgpzWlX7qGGAUUprAAANiG0LMk8427.jpg?cc=0.15268818847835064"/>
                    </div>
                    <div className="header-top-input">
                        <span className = "fa fa-search"></span>
                        <input type = "text" placeholder= "搜索商品名称"/>
                    </div>
                    <div className ="header-top-icon" ><p className = "fa fa-user"></p></div>
                </div>
                {/* 头部导航 */}
                <Navs/>
            </div>
        )
    }
}
export default Header