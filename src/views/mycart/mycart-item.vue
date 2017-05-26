<template>
    <div class="mycart-item-wrapper border-1px">
        <img :src="cartItem.thumb" alt="">
        <div class="goods-info">
            <span class="goods-title overflow-el">(第{{cartItem.period}}云) {{cartItem.title}}</span>
            <p class="gray-font-10">剩余
                <span class="orange-font-10">{{cartItem.remainder}}</span>人次
                <span v-show="cartItem.limit>0">,限购{{cartItem.limit}}人次</span>
            </p>
            <div class="change-delete">
                <div class="change">
                    <button :class="{'disable':count?count<=1:count>1}" @click="reduceCount">-</button>
                    <input type="number" v-model="count" @keyup="changeInput" ref="input">
                    <button @click="addCount">+</button>
                </div>
                <div class="delete" @click="deleteItem">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import inputNum from '../../components/input-num.vue'
// import Bus from '../../common/bus.js'

export default {
    data() {
        return {
        }
    },
    props: {
        cartItem: {
            type: Object
        },
        index: Number
    },
    methods: {
        deleteItem() {
            let index = this.index;
            this.$emit('index',index);
            this.$emit("confirmShow",true);
            // this.$store.dispatch('update_cur_shop_status', {
            //     index
            // });
            // this.$store.dispatch("delete_db");
            // alert(a);
        },
        addCount() {
            let id = this.cartItem.goods_id;
            this.$store.dispatch('check_db', {
                id
            });
            this.$store.dispatch("add_db");
        },
        reduceCount() {
            if (this.count > 1) {
                let id = this.cartItem.goods_id;
                this.$store.dispatch('check_db', {
                    id
                });
                this.$store.dispatch("reduce_db");
            }
        },
        changeInput(){
            var index=this.index;
            var inputVal=parseInt(this.$refs.input.value);
            if(inputVal>=1){
                this.$store.state.cart.cartList[index].count=inputVal;
            }
             this.$store.dispatch('update_local')
            // alert(this.count);
            
        }
    },
    computed: {
        count() {
            let cartData = this.$store.getters.getCartList;
            let len = cartData.length;
            for (var i = 0; i < len; i++) {
                if (cartData[i].goods_id == this.cartItem.goods_id) {
                    return cartData[i].count;
                }
            }
        }
    },
    components: {
        inputNum
    }
}
</script>
<style lang="scss">
.mycart-item-wrapper {
    height: 65px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    overflow: hidden;
    img {
        flex: 0 1 50px;
        min-width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
    }
    .goods-info {
        // box-sizing: border-box;
        flex: 0 0 80%;
        width: 80%;
        padding-left: 15px;
        .goods-title {
            font-size: 12px;
        }
    }
    .change-delete {
        display: flex;
        justify-content: space-between;
        .change {
            width: 130px;
            height: 26px;
            display: flex;
            button {
                height: 26px;
                line-height: 26px;
                width: 32%;
                background: #fff;
                border: 1px solid rgba(0, 0, 0, .1);
                &:first-child {
                    border-radius: 5px 0 0 5px;
                }
                &:last-child {
                    border-radius: 0 5px 5px 0;
                }
                &:hover {
                    outline: none;
                }
                &.disable {
                    color: #ccc;
                    background: #f9f9f9;
                }
                &:active {
                    background: #f1f1f1;
                }
            }
            input {
                text-align: center;
                width: 36%;
                line-height: 26px;
                border: 0;
                font-size: 13px;
                border-top: 1px solid rgba(0, 0, 0, .1);
                border-bottom: 1px solid rgba(0, 0, 0, .1);
                &:link,
                &:visited,
                &:hover,
                &:active {
                    outline: none;
                }
            }
        }
        .delete {
            position: absolute;
            right: 10px;
            bottom: 20px;
            margin-right: 20px;
            width: 16px;
            height: 16px;
            background-image: url('../../images/icon/cart_delete_icon_press.png');
            background-size: 16px 16px;
        }
    }
}
</style>
