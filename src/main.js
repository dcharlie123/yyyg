// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require("normalize.css");
import './css/comm.scss';

import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//vuex状态
import store from './store/index.js'


Vue.config.productionTip = false
//应用插件
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.use(require('vue-wechat-title'))
//数据请求
import axios from "axios"
Vue.prototype.$ajax = axios
axios.defaults.baseURL = 'https://easy-mock.com/mock/59165c589aba4141cf225605/mock';
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
Vue.directive('red', {
    bind: function(el) {
        el.onclick = function() {
            let img = new window.Image();
            img.src = el.src;
            img.style.position = 'fixed';
            img.style.zIndex=99;
            img.style.width="100%";
            img.style.left = img.style.top = "50%";
            img.style.transform="translate(-50%,-50%)";
            el.parentNode.appendChild(img);
            var mask=document.createElement('div');
            mask.style.position="fixed";
            mask.style.top=0;
            mask.style.bottom=0;
            mask.style.background="rgba(0,0,0,0.8)";
            mask.style.width="100%";
            el.parentNode.appendChild(mask);
            mask.addEventListener('touchmove',function(ev){ev.preventDefault()},{passive:false})
            img.addEventListener('touchmove',function(ev){ev.preventDefault()},{passive:false})
            mask.addEventListener("click",function(){
                el.parentNode.removeChild(img);
                el.parentNode.removeChild(mask);
            })
            img.addEventListener("click",function(){
                el.parentNode.removeChild(img);
                el.parentNode.removeChild(mask);
            })
        }
    }
})
router.beforeEach(({
    meta,
    path
}, from, next) => {
    var {
        auth = true
    } = meta
    var isLogin = Boolean(store.state.user.userID) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/loginIn') {
        return next({
            path: '/loginIn'
        })
    }
    next()
})