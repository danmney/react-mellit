import axios from "axios"
import qs from "querystring"
export default (url,data)=>{
    return axios.post(url,qs.stringify(data))
}