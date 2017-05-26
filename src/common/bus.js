import Vue from 'vue';  
export default new Vue({
    data:{
        token:null,//登录密码
        selectGoods:localStorage.getItem('selectGoods') ? JSON.parse(localStorage.getItem('selectGoods')) : [],//购物车商品
        curIndex:-1
    }
});  