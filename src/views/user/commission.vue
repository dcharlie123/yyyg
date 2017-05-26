<template>
    <div class="commission">
        <header>
            ￥{{commission}}
        </header>
        <section>
            <ul class="commission-tab border-1px">
                <li @click="toggleView('income')" :class="{'active':currentView=='income'}">佣金收入</li>
                <li @click="toggleView('consume')" :class="{'active':currentView=='consume'}">佣金消费</li>
                <li @click="toggleView('deposit')" :class="{'active':currentView=='deposit'}">佣金提现</li>
            </ul>
            <component :is="currentView"></component>
        </section>
        <footer>
            <span @click="deposit">申请体现</span><span>邀请有奖</span>
        </footer>
    </div>
</template>

<script>
import income from './commission/income.vue'
import consume from './commission/consume.vue'
import deposit from './commission/deposit.vue'
import toast from '../../components/toast/toast.js'
    export default {
        data(){
            return{
                currentView:'income',
                commission:0.06
            }
        },
        methods:{
            toggleView(view){
                this.currentView=view;
            },
            deposit(){
                if(this.commission<100){
                    toast("佣金满100才能提现哦")
                }

            }
        },
        components:{
            income,
            consume,
            deposit
        }
    }
</script>

<style lang="scss" scoped>
.commission {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f5f5f5;
    header {
        height: 90px;
        line-height: 90px;
        background: #fff9f2;
        color: #f60;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }
    section {
        background: #fff;
        .commission-tab {
            height: 46px;
            display: flex;
            justify-content: space-around;
            align-items: center; // margin-bottom: 2px;
            li {
                height: 46px;
                line-height: 46px;
                text-align: center;
                flex: 0 1 33.33%;
                font-size: 14px;
                color: #666;
                &.active {
                    box-shadow: 0 -2px 0 0 #f60 inset;
                }
            }
        }
    }
    footer {
        height: 40px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #666;
        span{
            height: 40px;
            line-height: 40px;
            flex: 0 1 50%;
            text-align: center;
            &:active{
                background: #f1f1f1;
            }
        }
    }
}
</style>
