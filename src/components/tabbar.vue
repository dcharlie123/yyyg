<template>
    <div>
        <ul class="tabbar-wrapper" ref="tabbarw">
            <router-link tag="li" :to="{name:'index'}" exact>
                <span>首页</span>
            </router-link>
            <router-link tag="li" :to="{name:'all'}">
                <span>所有商品</span>
            </router-link>
            <router-link tag="li" :to="{name:'lottery'}">最新揭晓</router-link>
            <router-link tag="li" :to="{name:'mycart'}">购物车
                <div ref="cart"></div>
                <i class="mycart-num" v-show="selectGoodsNum>0" ref="num">{{selectGoodsNum}}</i>
            </router-link>
            <router-link tag="li" :to="{name:'user'}">我的云购</router-link>
        </ul>
        <div class="ball-container">
            <div v-for="ball in balls">
                <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <div class="ball" v-show="ball.show">
                        <div class="inner inner-hook"></div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import Bus from '../common/bus.js'
export default {
    data() {
        return {
            balls: [
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                }
            ],
            dropBalls: []
        }
    },
    computed: {
        selectGoodsNum() {
            return this.$store.getters.getCartList.length
        }
    },
    mounted() {

    },
    methods: {
        drop(el) {//这里的el是指点击的元素
            for (let i = 0; i < this.balls.length; i++) {
                let ball = this.balls[i];
                if (!ball.show) {
                    ball.show = true;
                    ball.el = el;
                    this.dropBalls.push(ball);
                    return;
                }
            }
        },
        beforeDrop(el) {//这里的el是指掉落的小球
            let count = this.balls.length;
            while (count--) {
                let ball = this.balls[count];
                if (ball.show) {
                    let rect = ball.el.getBoundingClientRect();
                    let x = rect.left - 32;
                    let y = -(window.innerHeight - rect.top - 22);
                    el.style.display = "block";
                    el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                    el.style.transform = `translate3d(0,${y}px,0)`;
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                    inner.style.transform = `translate3d(${x}px,0,0)`;
                }
            }
        },
        dropping(el, done) {
            let rf = el.offsetHeight;
            let end=this.$refs.cart.parentNode.offsetLeft+this.$refs.cart.parentNode.offsetWidth*0.2;//获取小球掉落终点横坐标
            this.$nextTick(() => {
                el.style.webkitTransform = 'translate3d(0,0,0)';
                el.style.transform = 'translate3d(0,0,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webkitTransform = `translate3d(${end}px,0,0)`;
                inner.style.transform = `translate3d(${end}px,0,0)`;
                el.addEventListener('transitionend', done);
                
            });
        },
        afterDrop(el) {
            let ball = this.dropBalls.shift();
            if (ball) {
                ball.show = false;
                el.style.display = 'none';
            }
            this.$refs.num.style.transform="scale(0.5)";
            let _this_=this;
            setTimeout(function() {
                _this_.$refs.num.style.transform="scale(1)"
            }, 150);
            
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../css/comm.scss";
.tabbar-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: $tabbar-height; // line-height: $tabbar-height;
    display: flex;
    flex-direction: row;
    background: #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);
    li {
        flex: 0 1 33.3%;
        text-align: center;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
            margin-bottom: 5px;
            width: 20px;
            height: 20px;
        }
        &.active {
            color: #f60;
        }
        .mycart-num {
            width: 18px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            position: absolute;
            top: -5px;
            right: 5px;
            display: block;
            background: #f60;
            color: #fff;
            border-radius: 50%;
            transition: all .1s ease-out;
        }
    }
}

.ball-container {
    .ball {
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 200;
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        .inner {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #f60;
            transition: all 0.4s linear;
        }
    }
}
</style>

