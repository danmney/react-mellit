import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入路由文件
import {HashRouter as Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
//Swiper
import "swiper/dist/css/swiper.min.css"
//引入异步数据加载文件
import "./models/axios-utils"
//引入rem
import "./models/rem"
//引入通用样式文件
import "./stylesheets/main.scss"
//路由包裹外层文件
ReactDOM.render(
<Provider store = {store}>
<Route>
  <App />
</Route>
</Provider>
, document.getElementById('root'));
