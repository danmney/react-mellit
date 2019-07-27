import  React,{Component} from "react"
import "./content_top.scss"
import getImg from "../../../../../models/getImg"
class Content_top extends Component{
    renderContentImgs(){
        let {contentTopImgs} = this.props;
        return contentTopImgs.map(item=>{
            return (
                <div key = {item.goodId} className = "content-top-img">
                    {
                        /webp$/.test(item.img)?<img alt = "" src = {getImg(item.img)}/>
                                                :<img alt = "" src = {item.img} />
                    }
                </div>
            )
        })
    }
    render(){
        return (
            <div className = "content_top">
                <div className = "content_top_img">
                    {this.renderContentImgs()}
                </div>
                <div className = "lastImg">
                    <img style = {{width:"100%"}} alt = "" src = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34996713a880f13acf2f8cc20d4807ba.jpg?thumb=1&w=720&h=280" />
                </div>
            </div>    
        )
    }
}
Content_top.defaultProps = {
    contentTopImgs:[
        {goodId:1,img:"https://i8.mifile.cn/v1/a1/06ea4bef-cfdd-557c-3ac2-53e25e371e73.webp"},
        {goodId:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51b29e5bb6b531a5fbc11e57e4356b24.jpg?thumb=1&w=358&h=252"},
        {goodId:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a46ac983bf242ae5962b58da375932ae.jpg?thumb=1&w=358&h=252"},
        {goodId:4,img:"https://i8.mifile.cn/v1/a1/139eeb1a-95ac-d278-4b1e-e2fb05798908.webp"},
        {goodId:5,img:"https://i8.mifile.cn/v1/a1/1074a94c-0594-5ddd-7e53-2667d27e8e36.webp"}
    ]
}
export default Content_top