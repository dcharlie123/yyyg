<template>
    <div class="get-user-container">
        <div class="get-user-wrapper">
            <img class="get-user-img" src="../images/icon/icon_getuser.png" alt="">
            <div class="get-user-info">
                <img class="user-img" src="../images/user-avatar.jpg" alt="">
                <section class="get-user-text">
                    <p class="win-name-area"><span class="username">username165498416156161</span><span class="gray-font-14">(prov)</span></p>
                    <p class="gray-font-12">揭晓时间:2017-05-12 09:55:20</p>
                    <p class="gray-font-12">参与时间:2017-05-12 09:55:20</p>
                    <p class="gray-font-12">本云参与:10人次</p>
                </section>
            </div>
            <div class="luck clearfix">
                幸运云购码: <span class="orange-font-14">10000073</span>
                <button class="detail-btn">计算详情</button>
            </div>
        </div>
        <div class="get-user-btnArea">
            <button>参与记录</button><button>图文详情</button>
        </div>
    </div>
</template>
<style lang="scss">
    @import '../css/comm.scss';
    .get-user-wrapper {
        width: 90%;
        min-height: 80px;
        box-sizing: border-box;
        margin: 8px auto;
        padding: 10px 10px 5px 10px;
        border: 1px solid $main-color;
        border-radius: 5px;
        position: relative;
        .get-user-img {
            width: 50px;
            height: 50px;
            position: absolute;
            top: -3px;
            left: -3px;
        }
        .get-user-info {
            display: flex;
            padding: 0 15px;
            .user-img {
                width: 56px;
                height: 56px;
                border-radius: 50%;
            }
            .get-user-text {
                margin-left: 5px;
                flex: 0 0 70%;
                width: 70%;
                .win-name-area {}
            }
        }
        .luck {
            color: #777;
            margin-top: 20px;
            .detail-btn {
                height: 22px;
                line-height: 22px;
                float: right; // padding: 0 10px;
                padding-left: 10px;
                padding-right: 10px;
                font-size: 13px;
                color: #fff;
                background: #f60;
                border: 0;
                border-radius: 12px;
                &:active {
                    background: $main-color - 10;
                }
            }
        }
    }
    .get-user-btnArea{
        margin-top:8px;
        display: flex;
        justify-content: space-around;
        button{
            flex: 0 1 46%;
            width: 46%;
            height: 30px;
            line-height: 30px;
            font-size: 13px;
            background: #f1f1f1;
            border: 0;
            border-radius: 26px;
            &:active{
                background: #ccc;
            }
        }
    }
</style>
