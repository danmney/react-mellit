import  React,{Component} from "react"
import "./recommend.scss"
//引入banner图
import Banners from "./banners"
import ContentIcon from "./content_icom"
import ContentTop from "./content_top"
import ContentMiddle from "./content_middle"
import Group from "../../../../models/Group"
class Recommend extends Component{
    render(){
        return (
            <div className = "recommend">
                <Banners/>
                <ContentIcon/>
                <ContentTop/>
                <ContentMiddle/>
            </div>
        )
    }
}
export default Group(Recommend,{
    reducer:"home",
    states:["isShow"]
})