import  React,{Component} from "react"
import "./parameter.scss"
import Swiper from "swiper"
class Parameter extends Component{
    componentDidMount(){
        this.initSwiper()
    }
    //初始化Swiper
    initSwiper(){
        new Swiper(".parmeter-item",{
            slidesPerView: 4
        })
    }
    //渲染数据
    renderParam(){
        let {parameter} = this.props;
        return parameter.map(item=>{
            return (
               <div key = {item.id} className = "swiper-slide">
                    <img style = {{width:"17.7px",height:"17.7px"}} alt = "" src = {item.img} />
                    <span>{item.title}</span>
                    <p>{item.desc}</p>
                </div>
            )
        })
    }
    render(){
        return (
            <div className = "parameterList">
                <div className = "parmeter-item swiper-container">
                    <div className = "swiper-wrapper">
                        {this.renderParam()}
                    </div>
                </div>
            </div>
        )
    }
}
Parameter.defaultProps = {
    parameter:[
        {id:1,title:"CPU",desc:"骁龙855八核",img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"},
        {id:2,title:"摄像头",desc:"4800完+800万+1300万像素",img:"https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png"},
        {id:3,title:"超大屏",desc:"6.39英寸",img:"https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png"},
        {id:4,title:"屏幕分辨率",desc:"2340x1080",img:"https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png"},
        {id:5,title:"极速畅玩",desc:"8G",img:"https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png"},
        {id:6,title:"存储容量",desc:"256G",img:"https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png"},
        {id:7,title:"超长待机",desc:"4000mAh",img:"https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png"},
        {id:8,title:"运营商网络",desc:"4G全网通",img:"https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png"},
        {id:9,title:"网络模式",desc:"双卡双待",img:"https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png"},
    ]
}
export default Parameter