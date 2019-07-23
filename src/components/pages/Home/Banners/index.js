import React,{Component} from "react"
import "./banners.scss"
import Swiper from "swiper"
import GroupHome from "../../../../"
class Banners extends Component{
    getBanners(){
        this.props.getBanners(()=>{

        })
    }
    initSwiper(){
        
    }
    render(){
        return (
            <div>
                Banners
            </div>
        )
    }
}
export default Banners