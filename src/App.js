import React,{Component} from 'react';
//导入AppFooter
import AppFooter from "./models/AppFooter"
//路由组件
import {Route,Switch,withRouter,Redirect} from "react-router-dom"
//网页组件
import {Home,List,Mine,Buycar} from "./components/pages"
import Group from "./models/Group"
import Details from './components/pages/Details';
class App extends Component{
    componentDidMount(){
        let pathname = this.props.location.pathname
        let index = 1
        switch (pathname) {
            case "/home/recommend":
                index = 1
                break;
            case "/home/mobile":
                index = 2
                break;
            case "/home/smart":
                index = 3
                break;
            case "/home/television":
                index = 4
                break;
            case "/home/noteook":
                index = 5
                break;
            case "/home/appliance":
                index = 6
                break;
            case "/home/lifeside":
                index = 7
                break;
            default:
                break;
        }
        this.props.handelActive(index)
    }
    componentWillReceiveProps(props){
        let {pathname} = props.location;
        let {replace} = props.history;
        let {activeIndex} = props
        if (pathname === "/") {
            let index = 1
            replace("/home/recommend")
            this.props.handelActive(index)
        }
        //判断路由的变化
        if(pathname === "/home"){
            switch (activeIndex) {
                case 1:
                    replace("/home/recommend")
                    break;
                case 2:
                    replace("/home/mobile")
                    break;
                case 3:
                    replace("/home/smart")
                    break;
                case 4:
                    replace("/home/television")
                    break;
                case 5:
                    replace("/home/notebook")
                    break;
                case 6:
                    replace("/home/appliance")
                    break;
                case 7:
                    replace("/home/lifeside")
                    break;
                default:
                    break;
            }
           
        }
      }
    //当进入购买及我的页面隐藏AppFooter
    hasAppFooter(){
        let {pathname} = this.props.location
        if (pathname === "/mine" || pathname === "/buycar" ||  /details/.test(pathname)) return false
        return <AppFooter/>  
    }
    renderNavs(){
        //将数据渲染到app
        let {navs} = this.props
        return (
            <Switch>
               {
                 navs.map(item=>{
                      return (
                          <Route key = {item.id} path = {item.path}
                           component = {item.component} exact = {item.exact}/>
                      )
                 })
               }
               <Redirect to = "/home/recommend"/>
            </Switch>
        )
    }
    render(){
        return (
            <div className="App">
                {this.hasAppFooter()}
                {this.renderNavs()}
            </div>
        )
    }
}
App.defaultProps = {
  //一级路由数据
    navs:[
        {id:1,path:"/home",component:Home,exact:false},
        {id:2,path:"/list",component:List,exact:false},
        {id:3,path:"/buycar",component:Buycar,exact:false},
        {id:4,path:"/mine",component:Mine,exact:false},
        {id:5,path:"/details/:id",component:Details,exact:false}
    ]
}
export default withRouter(Group(App,{
    reducer:"home",
    states:["activeIndex"]
}));
