import React,{Component} from 'react';
//导入AppFooter
import AppFooter from "./models/AppFooter"
//路由组件
import {Route,Switch,withRouter,Redirect} from "react-router-dom"
//网页组件
import {Home,List,Mine,Buycar} from "./components/pages"
class App extends Component{
    componentWillReceiveProps(props){
        let {pathname} = props.location;
        let {replace} = props.history;
        if(pathname === "/home"){
          replace("/home/recommend")
        }
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
               <Redirect to = "/home/recommend" />
            </Switch>
        )
    }
    render(){
        return (
            <div className="App">
                <AppFooter/>
                {this.renderNavs()}
            </div>
        )
    }
}
App.defaultProps = {
  //一级路由数据
    navs:[
        {id:1,path:"/home",component:Home,exact:false},
        {id:1,path:"/list",component:List,exact:false},
        {id:1,path:"/buycar",component:Buycar,exact:false},
        {id:1,path:"/mine",component:Mine,exact:false},
    ]
}
export default withRouter(App);
