import  React,{Component} from "react"
import {NavLink,withRouter} from "react-router-dom"
//引入样式
import "./index.scss"
class AppFooter extends Component{
    renderNavs(){
        let {navs} = this.props;
        return navs.map(item=>{
            return (
                <NavLink 
                    key={item.id}
                    to = {item.path}
                    exact = {item.exact}
                >
                    <i className = {"fa fa-"+item.icon}></i>
                    <span>{item.title}</span>
                </NavLink>
            )
        })
    }
    render(){
        return (
            <div className = "footer-navs">
               {this.renderNavs()}
            </div>
        )
    }
}
AppFooter.defaultProps = {
    navs:[
        {id:1,title:"首页",icon:"home",path:"/home",exact:false},
        {id:2,title:"列表",icon:"list",path:"/list",exact:false},
        {id:3,title:"购物车",icon:"shopping-cart",path:"/buycar",exact:false},
        {id:4,title:"我的",icon:"user",path:"/mine",exact:false},
    ]
}
export default withRouter(AppFooter)