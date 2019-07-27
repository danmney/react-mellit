import  React,{Component} from "react"
import Group from "../../../../../models/Group"
import Swiper from "swiper"
import "./banner.scss"
class Banners extends Component{
    componentDidMount(){
        this.initSwiper()
    }
    //实例化Swiper
    initSwiper(){
        new Swiper(".banners",{
            loop:true,
            pagination: {
                el: '.swiper-pagination',
              },
        })
    }
    render(){
        return (
            <div className = "recommend-banners">
                <div className = "banners swiper-container">
                    <div className = "swiper-wrapper">
                        <div className = "swiper-slide">
                            <img style = {{width:"100%"}} alt = "" src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccda14b5cc9070911063b07affc3e38c.jpg?thumb=1&w=720&h=360" />
                        </div>
                        <div className = "swiper-slide">
                            <img style = {{width:"100%"}} alt = "" src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c352beae76d56e4a98c48c8782a497b2.jpg?thumb=1&w=720&h=360" />
                        </div>
                        <div className = "swiper-slide">
                            <img style = {{width:"100%"}} alt = "" src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0a369bd7eabff88bda2db7977ce3407c.jpg?thumb=1&w=720&h=360" />
                        </div>
                    </div>
                    <div className = "swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
export default Group(Banners,{
    reducer:"home",
    states:["recommendBanner"]
})