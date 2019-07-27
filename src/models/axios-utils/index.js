import {Component} from "react"
import Get from "./Get"
import Post from "./Post"

//挂载在Component原型上
Component.prototype.$get = Get;
Component.prototype.$post = Post;

export {
    Get,Post
}