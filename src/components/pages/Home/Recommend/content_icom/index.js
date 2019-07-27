import  React,{Component} from "react"
import getImg from "../../../../../models/getImg"
import "./icon.scss"
class ContentTop extends Component{
    renderIconImg(){
        let {iconImgs} = this.props
        return iconImgs.map(item=>{
            return (
                <div key = {item.id} className = "iconImg">
                    {/webp$/.test(item.img)?<img alt = "" src = {getImg(item.img)}/>
                    :<img alt = "" src = {item.img} />}
                </div>
            )
        })
    }
    render(){
        return (
            <div className = "content-iconImg">
                {this.renderIconImg()}
            </div>
        )
    }
}
ContentTop.defaultProps = {
    iconImgs:[
        {id:1,img:"https://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b.webp"},
        {id:2,img:"https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp"},
        {id:3,img:"https://i8.mifile.cn/v1/a1/26a132d9-c5ae-8a30-2705-f861e2e9f496.webp"},
        {id:4,img:"https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp"},
        {id:5,img:"https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp"},
        {id:6,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152"},
        {id:7,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"},
        {id:8,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152"},
        {id:9,img:"https://i8.mifile.cn/v1/a1/e49720d6-3a48-ac6e-44d4-79f92b2e890c.webp"},
        {id:10,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"},
    ]
}
export default ContentTop