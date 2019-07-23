import  React,{Component} from "react"
import {Route} from "react-router-dom"
//引入头部
import Header from "./Header"
import {Recommend,Mobile,Television,Netbook,
        Lifeside,Appliance,Smart} from "./all_net"
class Home extends Component{
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
            <div>
                {/* 头部 */}
               <Header/>
               {this.netNavs()}
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
export default Home