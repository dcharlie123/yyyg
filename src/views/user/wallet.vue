<template>
    <div class="wallet">
        <div class="wallet-header border-1px" @click="goConsumption">
            <img src="../../images/icon/wallet_icon.png" alt="">
            <div class="balance">
                <p class="gray-font-12">账户余额</p>
                <p class="orange-font-12">0.00</p>
            </div>
            <i>&gt;</i>
        </div>
        <div class="operate">
            <span>转账</span>
            <span>网银充值</span>
            <span>云购卡充值</span>
        </div>
        <m-list title="福分" @click.native="showPoints"><span class="orange-font-12">23</span><span class="gray-font-10" style="margin-left:10px;">100福分=1元</span></m-list>
        <m-list title="佣金" @click.native="showCommission"><span class="orange-font-12">￥0.06</span></m-list>
    </div>
</template>

<script>
import mList from '../../components/list.vue'
    export default {
        components:{
            mList
        },
        methods:{
            showPoints(){
                 this.$router.push({path:'/user/userpoints'})
            },
            showCommission(){
                 this.$router.push({path:'/user/commission'})
            },
            goConsumption(){
                this.$router.push({path:'/user/consumption'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wallet {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f1f1f1;
        .wallet-header{
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            img{
                flex: 0 1 50px;
                width: 50px;
                height: 50px;
                margin: 0 5px;
            }
            .balance{
                flex: 0 1 75%;
            }
            i{
                flex: 0 1 5%;
            }
        }
        .operate{
            height: 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #fff;
            margin-bottom: 15px;
            span{
                text-align: center;
                flex: 0 1 33.33%;
                height: 40px;
                line-height: 40px;
                position: relative;
                &::after{
                    content: '';
                    height: 80%;
                    border-right: 1px solid rgba(7,17,27,0.1);
                    position: absolute;
                    top:5px;
                    right: 0;
                    transform: scaleX(0.5);
                }
                &:active{
                    background: #f1f1f1;
                }
            }
        }
    }
</style>
