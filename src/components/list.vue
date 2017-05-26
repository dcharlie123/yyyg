<template>
    <section class="list border-1px">
        <div class="list-left">
            <img src="../images/user-avatar.jpg" alt="" v-if="listStyle==2">
            <div v-if="listStyle==2">
                <p>username</p>
                <p class="gray-font-12">timaaaaaae</p>
            </div>
            <div v-else class="title">
                <i v-if="haveIcon">a</i>
                {{title}}
                <slot></slot>
            </div>
        </div>
        <div class="list-right">
            <p class="gray-font-12" v-if="havePeople"><span class="orange-font-12">1</span>人次</p>
            <i v-show="showIconRight">&gt;</i>
        </div>
        
    </section>
</template>
<script>
    export default {
        props: {
            title: {
                type: [String, Number]
            },
            showIconRight: {
                type: Boolean,
                default: true
            },
            listStyle:{
                type:[Number,String],
                default:1//1:简单模式，2：带头像
            },
            haveIcon:{
                type:Boolean,
                default:false
            },
            havePeople:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="scss">
    .list {
        height: 50px;
        // line-height: 50px;
        display: flex;
        justify-content: space-between;
        background: #fff;
        color: #777;
        padding: 0 12px;
        background-origin: 100 100;
        
        &:active {
            background: #f1f1f1;
        }
        .list-left {
            margin-top:8px;
            display: flex;
            img {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                margin-right:5px;
            }
            .title{
                margin: 10px;
                font-size: 14px;
            }
        }
        .list-right{
            margin-top: 8px;
            line-height: 2;
            display: flex;
            .gray-font-12{
                margin-right: 5px;
            }
        }

    } // @keyframes activeBtn {
    //     0% {
    //         background: -webkit-radial-gradient(Circle, #ccc 12%, #fcfcfc 14%, #f9f9f9 16%, #f7f7f7 60%);
    //     }
    //     24% {
    //         background: -webkit-radial-gradient(Circle, #ccc 24%, #fcfcfc 18%, #f9f9f9 22%, #f7f7f7 66%);
    //     }
    //     37% {
    //         background: -webkit-radial-gradient(Circle, #ccc 37%, #fcfcfc 22%, #f9f9f9 28%, #f7f7f7 73%);
    //     }
    //     50% {
    //         background: -webkit-radial-gradient(Circle, #ccc 50%, #fcfcfc 26%, #f9f9f9 33%, #f7f7f7 80%);
    //     }
    //     62% {
    //         background: -webkit-radial-gradient(Circle, #ccc 62%, #fcfcfc 30%, #f9f9f9 37%, #f7f7f7 85%);
    //     }
    //     75% {
    //         background: -webkit-radial-gradient(Circle, #ccc 75%, #fcfcfc 40%, #f9f9f9 44%, #f7f7f7 90%);
    //     }
    //     87% {
    //         background: -webkit-radial-gradient(Circle, #ccc 87%, #fcfcfc 50%, #f9f9f9 58%, #f7f7f7 92%);
    //     }
    //     100% {
    //         background: -webkit-radial-gradient(Circle, #ccc 100%, #fcfcfc 66%, #f9f9f9 70%, #f7f7f7 96%);
    //     }
    // }
</style>
