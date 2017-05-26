<template>
    <button class="countDown-btn" @click="startCount=true" :class="{'disable':startCount}">
        {{ count }}
    </button>
</template>
<script>
    export default {
        data() {
            return {
                count: '获取验证码',
                startCount:false
            }
        },
        props: {
            countDownTime: {
                type: [Number, String],
                default: 60
            }
        },
        watch: {
            startCount(val, oldval) {
                if (val) {
                    this.count = this.countDownTime;
                    this.countDown()
                }
            }
        },
        methods: {
            countDown() {
                let time = setInterval(() => {
                    this.count--;
                    if (this.count == 0) {
                        clearInterval(time);
                        // this.$emit('countDown'); //通知父组件倒计时结束
                        this.count = "获取验证码";
                        this.startCount = false;
                    }
                }, 100)
            }
        }
    }
</script>
<style lang="scss" scoped>
.countDown-btn{
    // min-width: 80px;
    height: 30px;
    line-height: 30px;
    background: #fff;
    color: #f60;
    border:0;
    border-left: 1px solid #ccc;
    &.disable{
        color:#ccc;
        // background: #f9f9f9;
    }
}
</style>


