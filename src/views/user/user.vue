<template>
    <div class="user-wrapper">
        <header>
            <div v-if="hadLogin" class="hadLogin">
                <div class="top" @click="$router.push({path:'/user/sets'})">
                    <img class="user-avatar" src="../../images/user-avatar.jpg" alt="">
                    <div class="user-info">
                        <p>username</p>
                        <p>level</p>
                    </div>
                    <i>&gt;</i>
                </div>
                <div class="bottom">
                    <div class="gray-font-14" @click="$router.push({path:'/user/userpoints'})">
                        福分
                        <p class="orange-font-14">122</p>
                    </div>
                    <div class="gray-font-14">
                        余额(元)
                        <p class="orange-font-14">0.00</p>
                    </div>
                    <button @click="$router.push({path:'/user/charge'})">去充值</button>
                </div>
            </div>
            <div class="no-loginIn" v-else>
                <p>欢迎</p>
                <section class="login">
                    <button @click="goLogin">登录</button>
                    <button @click="goReg">注册</button>
                </section>
            </div>
        </header>
        <div v-for="title in titleList" class="title-list">
            <m-list :title="title.title" @click.native="goList(title.link)"></m-list>
        </div>
        <div class="help-share">
            <m-list title="帮助与反馈"></m-list>
            <m-list title="二维码分享"></m-list>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import mList from '../../components/list.vue'
export default {
    data() {
        return {
            titleList: [{
                "title": "云购记录",
                "link":"record",
                "icon": ""
            }, {
                "title": "获得的商品",
                "link":"haveWin",
                "icon": ""
            }, {
                "title": "我的晒单",
                "link":"my-postlist"
            }, {
                "title": "我的钱包",
                "link":"wallet"
            }],
            hadLogin: true
        }
    },
    methods:{
        goLogin(){
           this.$router.push({ path: '/loginIn' })
        },
        goReg(){
            this.$router.push({ path: '/register' })
        },
        goList(link){
            this.$router.push({path:'user/'+link})
        }
    },
    components: {
        mList
    }
}
</script>
<style lang="scss" scoped>
.user-wrapper {
    header {
        width: 100%;
        height: 200px;
        background: #f60;
        position: relative; // &::after{
        //     content: '';
        //     display: block;
        //     width: 100%;
        //     height: 160px;
        //     position: absolute;
        //     z-index: 1;
        //     bottom: -80px;
        //     border-radius: 0 0 65% 65%/0 0 20% 20%;
        //     background: #f60;
        // }
        margin-bottom: 10px;
        .no-loginIn {
            text-align: center;
            padding-top: 100px;
            color: #fff;
            font-size: 12px;
            .login {
                button {
                    height: 36px;
                    line-height: 36px;
                    margin: 15px;
                    background: #fff;
                    border: 0;
                    padding: 0 30px;
                    border-radius: 20px;
                    color: #f60;
                    font-size: 14px;
                    &:active {
                        background: #f1f1f1;
                    }
                }
            }
        }
        .hadLogin {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top {
                height: 120px;
                color: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center; // margin-top:10px;
                .user-avatar {
                    flex: 0 1 60px;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
                .user-info {
                    flex: 0 1 65%;
                    line-height: 1.5;
                }
            }
            .bottom {
                height: 80px;
                background: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                div{
                    text-align: center;
                }
                button{
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: #f60;
                    border: 0;
                    border-radius: 4px;
                    color: #fff;
                    padding:0 12px;
                    font-size: 13px;
                    &:active{
                        background: #f64;
                        box-shadow: 0 0 1px 1px #ccc;
                    }
                }
            }
        }
    }
    .help-share {
        margin-top: 10px;
    }
}
</style>
