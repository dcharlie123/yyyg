<template>
    <div class="all-wrapper">
        <div class="buy-goods-list clearfix">
            <ul>
                <li v-for="i in cartData">
                    <img :src="i.thumb" alt="">
                    <span class="overflow-el">{{i.title}}</span>
                    <span>{{i.count}}人次</span>
                </li>
            </ul>
            <div class="goods-number ">
                <span class="gray-font-14">共{{cartData.length}}件商品</span>
                <span class="gray-font-14">&nbsp;合计：
                    <span class="orange-font-12">￥{{totalPrice}}</span>
                </span>
            </div>
        </div>
        <ul class="select-payway">
            <li>
                <span class="gray-font-12">福分支付(您当前的福分23)</span>
                <div>
                    <input type="radio" id="userpoints" name="payway" class="payway" :disabled="0">
                    <label for="userpoints"></label>
                </div>
            </li>
            <li>
                <span class="gray-font-12">余额支付(账户余额￥0.00)</span>
                <div>
                    <input type="radio" id="balance" name="payway" class="payway">
                    <label for="balance"></label>
                </div>
            </li>
            <li class="border-1px">
                <span>选择网银</span>
                <span>需要网银支付￥{{totalPrice}}</span>
            </li>
            <li>
                <span>京东支付</span>
                <div>
                    <input type="radio" id="radio1" name="payway" class="payway">
                    <label for="radio1"></label>
                </div>
    
            </li>
            <li>
                <span>支付宝</span>
                <div>
                    <input type="radio" id="radio2" name="payway" class="payway">
                    <label for="radio2"></label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        totalPrice:{
            type:[Number,String]
        },
        cartData:{
            type:Array
        }
    }
}
</script>

<style lang="scss" scoped>
.buy-goods-list {
    background: #fff;
    margin-bottom: 10px;
    ul {
        li {
            height: 40px;
            display:flex;
            background: #fff;
            justify-content: space-between;
            align-items: center;
            font-size: 11px;
            img{
                flex:0 1 25px;
                min-width: 25px;
                height: 25px;
                padding: 0 5px;
            }
            span{
                &:first-child{
                    flex:0 0 70%;
                }
                &:last-child{
                    flex:0 16%;
                }
            }
        }
    }
    .goods-number {
        height: 30px;
        line-height: 30px;
        margin-right: 8px;
        float: right;
    }
}

.select-payway {
    li {
        display: block;
        height: 46px;
        line-height: 46px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        &:nth-child(2){
            margin-bottom: 10px;
        }
        span {
            margin: 0 10px;
            &:last-child {
                color: #777;
                font-size: 13px;
            }
        }
        .payway {
            display: none;
            padding: 20px 100px;
            &+label {
                display: inline-block;
                width: 18px;
                height: 18px;
                border: 2px solid #ccc;
                border-radius: 50%;
                line-height: 18px;
                text-align: center;
                position: relative;
                margin-right: 10px;
                margin-top: 15px;
            }
            &+label::after {
                content: "";
                display: inline-block;
                height: 40px;
                width: 999px;
                position: absolute;
                left: -999px;
                background: transparent;
            }
            &:checked+label {
                border: 1px solid #f60;
            }
            &:checked+label::before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -6px;
                margin-top: -6px;
                width: 12px;
                height: 12px;
                text-align: center;
                border-radius: 50%;
                background: #f60;
            }
        }
    }
}
</style>
