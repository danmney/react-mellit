import  React,{Component} from "react"
import {Route} from "react-router-dom"
import Group from "../../../models/Group"
import "./home.scss"
//引入头部
import Header from "./Header"
import {Recommend,Mobile,Television,Netbook,
        Lifeside,Appliance,Smart} from "./all_net"
class Home extends Component{
    componentDidMount(){
        this.props.backTop()
        window.addEventListener("scroll",this.props.backTop)
    }
    componentWillMount(){
        //销毁监听
        window.removeEventListener("scroll",this.props.backTop)
    }
    backTop(){
        window.scrollTo(0,0)
    }
    netNavs(){
        let {routes} = this.props;
        return  routes.map(item=>{
                return (
                    <Route key={item.id} path = {item.path}
                    component={item.component} exact={item.exact}/>
                )
            })
    }
    render(){
        return (
            <div className = "home">
                {/* 头部 */}
               <Header/>
               {this.netNavs()}
               {this.props.isShow?<div onClick = {this.backTop} className = "backTop">
                    <i className = "fa fa-arrow-up"></i>
                </div>:""}
            </div>
        )
    }
}
Home.defaultProps = {
    // 二级路由
    routes:[
        {id:1,path:"/home/recommend",exact:false,component:Recommend},
        {id:2,path:"/home/mobile",exact:false,component:Mobile},
        {id:3,path:"/home/smart",exact:false,component:Smart},
        {id:4,path:"/home/television",exact:false,component:Television},
        {id:5,path:"/home/netbook",exact:false,component:Netbook},
        {id:6,path:"/home/appliance",exact:false,component:Appliance},
        {id:7,path:"/home/lifeside",exact:false,component:Lifeside}
    ]
}
export default Group(Home,{
    reducer:"home",
    states:["isShow"]
})