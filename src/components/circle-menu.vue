<template>
    <div class="circle-menu" ref="circle" @touchstart="mousedown($event)" @touchmove="mousemove($event)" @touchend="mouseup($event)">
        <div class="menu-btn" @click="toggleShow" :class="{'active':isShowMenuList}">+</div>
    
        <transition name="left">
            <div class="menu-list-item" v-show="isShowMenuList" @click="goView()">后退</div>
        </transition>
        <transition name="top">
            <div class="menu-list-item" v-show="isShowMenuList" @click="goView('/')">主页</div>
        </transition>
        <transition name="bottom">
            <div class="menu-list-item" v-show="isShowMenuList" @click="goView('/mycart')">购物车</div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShowMenuList: false,//是否展示菜单列表
            isdrag: false,//是否处于拖拽状态
            disX: null,//记录触摸点的水平位置
            disY: null,//记录触摸点的垂直位置
            NowLeft: null,//记录拖拽元素的水平位置
            NowTop: null//记录拖拽元素的垂直位置
        }
    },
    mounted() {
        // this.$refs.circle.addEventListener('touchmove', function (e) {
        //     e.preventDefault();
        // }, false);

    },
    methods: {
        toggleShow() {
            this.isShowMenuList = !this.isShowMenuList;
        },
        goView(link) {
            if (link) {
                this.$router.push({
                    path: link
                })
            } else {
                this.$router.go(-1)
            }
            this.isShowMenuList = false
        },
        /*圆形菜单拖拽
        writeBy：dcharlie123
        date:2017-05-25
        */
        mousedown(ev) {
            this.isdrag = true;
            this.disX = ev.touches[0].pageX;
            this.disY = ev.touches[0].pageY;
            this.NowTop = this.$refs.circle.offsetTop;
            this.NowLeft = this.$refs.circle.offsetLeft;
        },
        bodyScroll(event) {
            if (event.cancelable) {
                // 判断默认行为是否已经被禁用
                if (!event.defaultPrevented) {
                    event.preventDefault();
                }
            }
        },
        mousemove(ev) {
            if (this.isdrag) {
                if(document.body.clientWidth-40<(ev.touches[0].pageX - (this.disX - this.NowLeft))){
                    this.$refs.circle.style.left=document.body.clientWidth-40+'px';
                }else if(ev.touches[0].pageX - (this.disX - this.NowLeft)<0){
                     this.$refs.circle.style.left=0+'px';
                }else{
                    this.$refs.circle.style.left = ev.touches[0].pageX - (this.disX - this.NowLeft) + 'px';
                }
                if((ev.touches[0].pageY - (this.disY - this.NowTop))<0){
                    this.$refs.circle.style.top=0+'px';
                }else if(document.body.clientHeight-40<(ev.touches[0].pageY - (this.disY - this.NowTop))){
                    this.$refs.circle.style.top =document.body.clientHeight-40 + 'px';
                }else{
                    this.$refs.circle.style.top = ev.touches[0].pageY - (this.disY - this.NowTop) + 'px';
                }
                document.addEventListener('touchmove', this.bodyScroll);
                return false;
            }
        },
        mouseup(ev) {
            this.isdrag = false;
            document.removeEventListener('touchmove', this.bodyScroll);
        },
    }
}
</script>
<style lang="scss" scoped>
.circle-menu {
    position: fixed;
    z-index: 9990;
    top: 80%;
    left: 90%;
    .menu-btn {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 30px;
        background: rgba(7, 17, 27, 0.5);
        border-radius: 100%;
        color: #fff;
        &.active {
            transform: rotate(45deg);
            background: transparent;
            color: #f60;
        }
        &:active {
            background: rgba(7, 17, 27, 0.8)
        }
    }
    .menu-list-item {
        position: absolute;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: rgba(7, 17, 27, 0.5);
        border-radius: 50%;
        font-size: 12px;
        color: #fff;
        &:nth-child(2) {
            top: 0px;
            left: -40px;
        }
        &:nth-child(3) {
            top: -40px;
            right: 0px;
        }
        &:nth-child(4) {
            bottom: -40px;
            right: 0px;
        }
    }
}

.top-enter-active {
    transition: all .3s ease;
}

.top-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.top-enter,
.top-leave-active {
    transform: translateY(20px);
    opacity: 0;
}

.left-enter-active {
    transition: all .3s ease;
}

.left-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.left-enter,
.left-leave-active {
    transform: translateX(20px);
    opacity: 0;
}

.bottom-enter-active {
    transition: all .3s ease;
}

.bottom-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.bottom-enter,
.bottom-leave-active {
    transform: translateY(-20px);
    opacity: 0;
}
</style>

