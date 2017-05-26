<template>
    <div class="lottery-item">
        <router-link tag="div" :to="{name:'goodDetail',params:{goods_id:123,period:11111}}">
            <img class="lottery-item-img" src="../../images/test1.jpg" alt="">
            <p class="lottery-item-title overflow-el">(第4962云) 苹果（Apple）iPhone 6s Plus 32G版 4G手机</p>
        </router-link>
        <div v-if="!timeout">
            <p class="gray-font-12">价值￥
                <em>6000.00</em>
            </p>
            <p class="gray-font-12">揭晓倒计时:</p>
            <timer></timer>
        </div>
        <section v-else>
            <div class="user-info">
                <img class="user-img" src="../../images/user-avatar.jpg" alt="">
                <div class="user-text">
                    <p class="user-name">username</p>
                    <p class="user-time gray-font-10">
                        <span class="orange-font-10">188</span> 人次获得
                    </p>
                </div>
            </div>
            <div class="luck">
                <p class="luck-num gray-font-12">幸运云购码:10002657</p>
                <p class="luck-time gray-font-12">揭晓时间:刚刚</p>
            </div>
        </section>
    </div>
</template>
<script>
import timer from '../../components/timer.vue'
export default {
    data() {
        return {
            timeout: true
        }
    },
    components: {
        timer
    }
}
</script>
<style lang="scss">
.lottery-item {
    padding: 10px;
    .lottery-item-img {
        width: 100px;
        height: 100px;
        display: block;
        padding: 8px 5px;
        margin: 3px auto;
    }
    .lottery-item-title {
        text-align: center;
        font-size: 12px;
    }
    section {
        margin: 0 auto;
        .user-info {
            display: flex;
            justify-content: space-around;
            height: 36px;
            margin: 3px 0;
            .user-img {
                display: block;
                width: 36px;
                height: 36px;
                border-radius: 50%;
            }
            .user-text {
                margin-left: 10px;
                text-align: center;
                .user-name {
                    margin: 0 0;
                    font-weight: 500;
                }
            }
        }
    }
    .luck {
        display: block;
        margin: 15px 1%;
        @media (min-width:769px){
            margin: 15px  0 15px 20%;
        }
        // text-align: center;
    }
}
</style>


