import  React,{Component} from "react"
import "./buycar.scss"
import {withRouter} from "react-router-dom"
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
                    onLeftClick={() => this.props.history.goBack()}
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
export default withRouter(Buycar)