import  React,{Component} from "react"
import {NavLink,withRouter} from "react-router-dom"
import Group from "../../../../models/Group"
import Swiper from "swiper"
class Navs extends Component{
    componentDidMount(){
        //初始化swiper
        this.initSwiper()
    }
    componentWillReceiveProps(props){
        let {pathname} = props.location
        var index = 1;
        switch(pathname){
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
            case "/home/notebook":
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
    activeClick = (e)=>{
        let index = e.target.getAttribute("index")
        this.props.handelActive(index)
    }
    headerNavs(){
        let {navs,activeIndex} = this.props;
        return navs.map(item=>{
            return (
                <div className = "swiper-slide" key = {item.id}>
                    <NavLink  to = {item.path}>
                        <span index = {item.id} onClick = {this.activeClick}
                         className = {activeIndex === item.id?"active":""}
                        >{item.title}</span>
                    </NavLink>
                </div>
            )
        })
    }
    initSwiper(){
        new Swiper (".header-btom",{
            slidesPerView: "auto"
        })
    }
    render(){
        return (
            <div className = "header-btom swiper-container">
                <div className = "swiper-wrapper">
                    {this.headerNavs()}
                </div>
            </div>
        )
    }
}
Navs.defaultProps = {
    navs:[
        {id:1,title:"推荐",path:"/home/recommend",exact:false},
        {id:2,title:"手机",path:"/home/mobile",exact:false},
        {id:3,title:"智能",path:"/home/smart",exact:false},
        {id:4,title:"电视",path:"/home/television",exact:false},
        {id:5,title:"笔记本",path:"/home/notebook",exact:false},
        {id:6,title:"家电",path:"/home/appliance",exact:false},
        {id:7,title:"生活周边",path:"/home/lifeside",exact:false},
    ]
}
export default withRouter(Group(Navs,{
    reducer:"home",
    states:["activeIndex"]
}))