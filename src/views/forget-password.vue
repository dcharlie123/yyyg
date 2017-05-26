<template>
    <transition name="up">
        <div class="forget-wrapper">
            <back url="/user" back="取消"></back>
            <div class="input-area-reg">
                <h4>找回密码</h4>
                <label for="username">
                    <span>账号</span>
                    <input name="username" type="text" v-model="username" placeholder="请输入手机密码或邮箱">
                </label>
                <label for="verification">
                    <span>验证码</span>
                    <input name="verification" class="verification" type="password" v-model="verification" placeholder="请输入您收到的短信验证码">
                    <count-down></count-down>
                </label>
            </div>
            <aside class="gray-font-14">
                我们将发送验证码到您的手机或邮箱,请注意查收
            </aside>
        </div>
    </transition>
</template>
<script>
import countDown from '../components/count-down.vue'
import back from '../components/back.vue'
export default {
    data() {
        return {
            username: '',
            verification: ''
        }
    },
    methods: {
        back() {
            this.$router.push({
                path: "/user"
            });
        }
    },
    components: {
        countDown,
        back
    }
}
</script>
<style lang="scss" scoped>
.forget-wrapper {
    position: absolute;
    min-height: 100%;
    width: 100%;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column; // justify-content: center;
    align-items: center;
    .back {
        position: absolute;
        left: 0px;
        top: 0px;
        padding: 15px 20px 20px 15px;
    }
    .input-area-reg {
        margin-top: 100px;
        width: 90%;
        display: flex;
        flex-direction: column;
        label {
            width: 100%;
            &::after {
                content: '';
                display: block;
                margin: 0 auto; // width: 60%;
                border: 1px solid #ccc;
                transform: scaleY(0.5)
            }
            span {
                font-size: 14px;
                display: inline-block;
                width: 15%;
                text-align: left; // margin-right: 30px;
            }
            input {
                border: 0;
                width: 70%;
                padding: 30px 5px 10px 3px;
                font-size: 12px;
                &.verification {
                    width: 50%; // margin-left: 30px;
                    padding: 30px 0px 10px 17px;
                }
            }
            .countDown-btn {
                width: 26%;
                font-size: 11px;
                padding: 0;
                border-radius: 0;
            }
        }
    }
    .orange-btn-large {
        margin-top: 30px;
    }
    .forget-reg {
        margin-top: 12px;
        span {
            margin: 0 9%;
        }
    }
    aside.gray-font-14 {
        margin-top: 15px;
    }
}

// @media (max-width:359px) {
//     .verification{
//         width: 45%;
//     }
//     .countDown-btn {
//         width: 30%;
//         font-size: 10px;
//     }
// }
</style>
