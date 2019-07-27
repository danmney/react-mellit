import  React,{Component} from "react"
import "./buycar.scss"
import BuycarFooter from "./buycarFooter"
import GoodsList from "./goodsList"
import { NavBar, Icon } from 'antd-mobile';
class Buycar extends Component{
    render(){
        return (
            <div className = "buycar">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >购物车</NavBar>
                <GoodsList></GoodsList>
                <BuycarFooter/>
            </div>
        )
    }
}
export default Buycar