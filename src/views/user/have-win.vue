<template>
    <div class="haveWin-wrapper">
        <back back="X"></back>
        <div class="haveWin-content" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <div v-for="i in 20">
                <goods-list @click.native="goOrderDetail"></goods-list>
                <div class="haveWin-order border-1px">
                    <span class="gray-font-14">订单号:1000000</span>
                    <div>
                        <button @click="showDelivery">查看物流</button>
                        <button>确认收货</button>
                    </div>
                </div>
            </div>
    
        </div>
        <div class="no-record gray-font-14">
            已无更多记录
        </div>
    </div>
</template>
<script>
import back from '../../components/back.vue'
import goodsList from './goods-list.vue'
export default {
    data() {
        return {
            busy: false
        }
    },
    methods: {
        loadMore() {
            setTimeout(function () {
                console.log(1);
                this.busy = true;
            }, 500);
            this.busy = false;
        },
        goOrderDetail() {
            this.$router.push({ path: '/user/orderDetail' })
        },
        showDelivery() {
            this.$router.push({ path: '/user/showDelivery' })
        }
    },
    components: {
        back,
        goodsList
    }
}
</script>
<style lang="scss" scoped>
.haveWin-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    .back {
        padding: 12px;
    }
    .haveWin-content {
        margin-top: 40px;
        .haveWin-order {
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            button {
                height: 28px;
                line-height: 28px;
                font-size: 13px;
                &:last-child {
                    border: 1px solid #f60;
                    color: #f60;
                }
            }
        }
    }

    .no-record {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
        background: #f1f1f1;
    }
}
</style>
