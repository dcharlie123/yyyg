<template>
    <div class="all-wrapper">
        <div class="cart-wrapper">
            <mycart-item v-for="(cartItem,index) in cartData" key="index" :cartItem="cartItem" :index="index" @index="getDeleteIndex" @confirmShow="confirmShow"></mycart-item>
        </div>
        <div class="total_pay clearfix" v-if="cartData.length">
            <span>合计:<span class="orange-font-14">￥{{total_price}}</span></span>
            <button class="pay" @click="$router.push({path:'/mycart/pay'})">结算</button>
        </div>
        <button class="clearCart" @click="clearCart" v-show="cartData.length">清空购物车</button>
        <confirm v-show="isShowConfirm" :index="deleteIndex" @confirmHidden="confirmHidden" msg="您确认删除吗？"></confirm>
        <router-view :totalPrice="total_price" :cartData="cartData"></router-view>
    </div>
</template>
<script>
    import mycartItem from './mycart-item.vue';
    import Bus from '../../common/bus.js'
    import confirm from '../../components/confirm/confirm.vue'
    export default {
        data() {
            return {
                cartData:[],
                deleteIndex:null,
                isShowConfirm:false
            }
        },
        computed:{
            total_price(){
                let total=0;
                this.cartData.forEach(function(item) {
                    total+=item.count;
                }, this);
                return total.toFixed(2);;
            }
        },
        methods:{
            clearCart(){
                this.$store.dispatch('clear_local');
            },
            getDeleteIndex(val){
                this.deleteIndex=val
            },
            confirmShow(val){
                this.isShowConfirm=val;
            },
            confirmHidden(val){
                this.isShowConfirm=val;
            }
        },
        mounted(){
            this.cartData=this.$store.getters.getCartList;
        },
        components: {
            mycartItem,
            confirm
        }
    }
</script>
<style lang="scss">
@import "../../css/comm.scss";
.cart-wrapper{
    margin-bottom: $total_pay-height;
}
.total_pay{
    width: 100%;
    // max-width: 640px;
    height: $total_pay-height;
    line-height:  $total_pay-height;
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: $tabbar-height;
    padding: 0 10px;
    .pay{
        width: 100px;
        height: 100%;
        background: #f60;
        border: 0;
        padding: 5px 10px;
        border-radius: 5px;
        color:#fff;
        float: right;
        border-radius: 0;
        &:hover,&:active{
            outline: none;
        }
        &:active{
            background: #f64;
            box-shadow:0 0 1px 1px #ccc;
        }
    }
}
.clearCart{
    width: 60%;
    height: 36px;
    display: block;
    margin: 0 auto;
}
</style>
