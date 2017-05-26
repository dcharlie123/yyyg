<template>
    <transition name="up">
        <div class="login-wrapper">
            <back url="/user" back="取消"></back>
            <div class="input-area-reg">
                <h4>手机号码注册</h4>
                <label for="username">
                    账号
                    <input name="username" type="text" v-model="username" placeholder="请输入手机密码">
                </label>
                <label for="password">
                    密码
                    <input name="password" type="password" v-model="password" placeholder="8-20位,数字、字母或字符组成">
                </label>
            </div>
            <button class="orange-btn-large">注册</button>
            <div class="gray-font-14 forget-reg">
                <span @click="$router.push({path:'/forgetPassword'})">忘记密码</span>
                <span @click="$router.push({path:'/loginIn'})">已有账号,去登录</span>
            </div>
        </div>
    </transition>
</template>
<script>
import back from '../components/back.vue'
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            back() {
                this.$router.push({path:"/user"});
            }
        },
        components:{
            back
        }
    }
</script>
<style lang="scss" scoped>
.login-wrapper {
    position: absolute;
    min-height: 100%;
    width: 100%;
    background: #fff;
    text-align: center;
    display: flex;
    flex-direction: column; // justify-content: center;
    align-items: center;
    .input-area-reg {
        margin-top: 100px;
        width: 80%;
        display: flex;
        flex-direction: column;
        input {
            border: 0;
            width: 65%;
            padding: 30px 45px 10px 8px;
            font-size: 12px;
        }
        label {
            width: 100%;
            &::after {
                content: '';
                display: block;
                margin: 0 auto; // width: 60%;
                border: 1px solid #ccc;
                transform: scaleY(0.5)
            }
        }
    }
    .orange-btn-large {
        margin-top: 30px;
    }
    .forget-reg {
        width:100%;
        margin-top: 15px;
        span {
            margin: 0 9%;
        }
    }
}
</style>

