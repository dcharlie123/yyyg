<template>
    <transition name="up">
        <div class="login-wrapper">
            <back url="/user" back="取消"></back>
            <img class="header-img" src="../images/user-avatar.jpg" :class="{'focusClass':isFocus}">
            <div class="input-area">
                <label for="username">
                    <span>账号</span>
                    <input name="username" type="text" @focus="setFocus" @blur="serBlur" v-model="username" placeholder="账号">
                </label>
                <label for="password">
                    <span>密码</span>
                    <input name="password" type="password" @focus="setFocus" @blur="serBlur" v-model="password" placeholder="密码">
                </label>
                <label for="v-img">
                    <span>验证码</span>
                    <input class="v-img" name="v-img" type="text" @focus="setFocus" @blur="serBlur">
                    <img :src="vImg" alt="">
                </label>
            </div>
            <button class="orange-btn-large" :class="{'disable':disable}">登录</button>
            <div class="gray-font-14 forget-reg">
                <span @click="$router.push({path:'/forgetPassword'})">忘记密码</span>
                <span @click="$router.push({path:'/register'})">免费注册</span>
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
                password: '',
                vImg:'',
                isFocus: false
            }
        },
        mounted(){
            let _this_=this;
            this.$ajax.get('https://easy-mock.com/mock/59165c589aba4141cf225605/mock/captcha').then(function(res){
                if(res.status===200){
                    _this_.vImg=res.data.data.captcha;
                }
            })
        },
        computed: {
            disable() {
                if (this.username && this.password) {
                    return false
                } else {
                    return true
                }
            }
        },
        methods: {
            serBlur() {
                this.isFocus = false
            },
            setFocus() {
                this.isFocus = true
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
    .header-img {
        margin-top: 100px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all 0.5s;
        &.focusClass {
            width: 30px;
            height: 30px;
        }
    }
    .input-area {
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
                width: 10%;
                font-size: 14px;
                text-align: center;
            }
            input {
                width: 80%;
                width: 80%;
                border: 0;
                padding: 20px 5px 10px 10px;
                font-size: 12px;
                &.v-img {
                   width: 45%;
                }
            }
            img{
                width: 30%;
                height: 30px;
                vertical-align: middle;
                border:1px solid #ccc;
            }
        }
    }
    .orange-btn-large {
        margin-top: 30px;
        &.disable {
            background: #ffba75;
            color: #f1f1f1;
            &:active {
                background: #ffba75;
                color: #f1f1f1;
                box-shadow: none;
            }
        }
    }
    .forget-reg {
        width: 100%;
        margin-top: 15px;
        span{
            margin:0 9%;
        }
    }
}
</style>

