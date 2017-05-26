<template>
    <div class="index-product-item-wrapper">
        <img class="product-img" :src="goodsItem.thumb" alt="" @click="goGoodDetail">
        <p class="product-title overflow-el">{{goodsItem.title}}</p>
        <div>
            <m-progress :progress="progress" :showText="showProgressText"></m-progress>
        </div>
        <div class="buy-area">
            <button class="buy-btn" @click.stop="buy">立即1元云购</button>
            <i class="buy-addCart" @click.stop="addCart(goodsItem,$event)"></i>
        </div>
    </div>
</template>
<script>
    import Bus from '../../../common/bus.js';
    import Modal from '../../../components/modal.js'
    import mProgress from '../../../components/progress.vue'
    import Vue from 'vue';
    export default {
        data() {
            return {
            }
        },
        computed: {
            progress() {
                return {
                    "all": this.goodsItem.all,
                    "participate": this.goodsItem.participate,
                    "remainder": this.goodsItem.remainder
                }
            }
        },
        props: {
            goodsItem: {
                type: Object
            },
            showProgressText: {
                type: [Boolean, String],
                default: false
            }
        },
        methods: {
            buy() {
                Modal()
            },
            addCart(goodsItem,event) {
                let id = goodsItem.goods_id;
                //检查是否已经存在购物车列表中
                this.$store.dispatch('check_db', {
                    id
                });
                //如果不存在购物车列表中，将商品添加到列表中,并设置商品的count
                //如果存在，对商品的count++
                if (this.$store.state.cart.curIndex == -1) {
                    this.$set(this.goodsItem, 'count', 1);
                    this.$store.dispatch('create_db', {
                        goodsItem
                    });
                } else {
                    this.$store.dispatch('add_db');
                }
                this.$emit("add",event.target);
                // console.log(this.$store.state.cart.cartList)
            },
            //跳转到该商品的详情页
            goGoodDetail() {
                this.$router.push({
                    name: 'goodDetail',
                    params: {
                        goods_id: this.goodsItem.goods_id,
                        period: this.goodsItem.period
                    }
                })
            }
        },
        components: {
            'm-progress': mProgress
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../css/comm.scss';
    .index-product-item-wrapper {
        .product-img {
            display: block;
            margin: 5px auto;
            width: 100px;
            height: 100px;
        }
        .product-title {
            text-align: center;
            font-size: 12px;
            padding: 0 6px;
        }
        .buy-area {
            display: flex;
            justify-content: space-around;
            margin: 8px 0 2px 0;
            .buy-btn {
                flex: 1 0 60%;
                margin: 0 2%;
                height: $buy-area-height;
                line-height: 1.5;
                text-align: center;
                font-size: 10px;
                border-radius: $buy-area-height;
                border: 1px solid #f60;
                background: #fff;
                color: #f60;
                &:link,
                &:visited,
                &:hover,
                &:active {
                    outline: none;
                }
            }
            .buy-addCart {
                flex: 0 1 $buy-area-height;
                background-image: url('../../../images/icon/add_to_cart_normal.png');
                background-repeat: no-repeat;
                background-size: $buy-area-height;
                &:active {
                    background-image: url('../../../images/icon/add_to_cart_press.png');
                }
            }
        }
    }
</style>

