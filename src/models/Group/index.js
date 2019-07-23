//引入高阶组件
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "./actionCreators"
    const Group = (UIComponent,options)=>{
        return connect(state=>{
            let {reducer,states} = options;
            let _state = {}
            states.forEach(item=>{
                _state[item] = state.getIn([reducer,item])
            })
            return _state
        },dispatch=>{
            return bindActionCreators(actionCreators[options.reducer],dispatch)
        })(UIComponent)
    }
export default Group