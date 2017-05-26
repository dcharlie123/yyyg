<template>
    <div>
        <div class="bottom-btn-wrapper">
            <button class="btn1">{{btnText.btn1}}</button>
            <button class="btn2" @click="btn2Action">{{btnText.btn2}}</button>
            <button class="add-cart" v-if="!isFull" @click="$router.push({path:'/mycart'})" ref="cart">{{selectGoodsNum}}</button>
        </div>
        <div class="ball-container">
            <div v-for='ball in balls'>
                <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <div class="ball" v-show="ball.show">
                        <div class="inner inner-hook" :style="{'background-image':'url('+dropImg+')'}"></div>
                    </div>
                </transition>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            state: 1,
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
    props: {
        isFull: {
            type: Boolean,
            default: false
        },
        goodsDetail: {
            type: Object
        }
    },
    computed: {
        btnText() {
            if (this.isFull) {
                return {
                    "btn1": "云购正在进行中...",
                    "btn2": "立即参与"
                }
            } else {
                return {
                    "btn1": "立即云购",
                    "btn2": "加入购物车"
                }
            }
        },
        selectGoodsNum() {
            return this.$store.getters.getCartList.length
        },
        goodsItem() {
            return {
                "goods_id": this.goodsDetail.goods_id,
                "period": this.goodsDetail.period,
                "title": this.goodsDetail.title,
                "money": this.goodsDetail.money,
                "all": this.goodsDetail.all,
                "participate": this.goodsDetail.participate,
                "remainder": this.goodsDetail.remainder,
                "limit": this.goodsDetail.limit,
                "thumb": this.goodsDetail.thumbs[0].img
            }
        },
        dropImg() {
            if (this.goodsDetail.thumbs) {
                return this.goodsDetail.thumbs[0].img;
            }
        }
    },
    methods: {
        btn2Action() {
            let goodsItem = this.goodsItem;
            let id = this.goodsDetail.goods_id;
            if (!this.isFull) {
                this.$store.dispatch('check_db', {
                    id
                });
                // alert(this.$store.state.cart.curIndex);
                if (this.$store.state.cart.curIndex != -1) {
                    this.$store.dispatch("add_db");
                } else {
                    this.$set(this.goodsItem, 'count', 1);
                    this.$store.dispatch('create_db', {
                        goodsItem
                    });
                }
                this.drop();
            }
        },
        drop() {
            for (let i = 0; i < this.balls.length; i++) {
                let ball = this.balls[i];
                if (!ball.show) {
                    ball.show = true;
                    // ball.el = el;
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
                    // let rect = ball.el.getBoundingClientRect();
                    let x = window.innerWidth*0.5 - 32;
                    let y = -(window.innerHeight*0.8 - 22);
                    // el.style.display = "block";
                    el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                    el.style.transform = `translate3d(0,${y}px,0)`;
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                    inner.style.transform = `translate3d(${x}px,0,0)`;
                }
            }
        },
        dropping(el, done) {
            var endX = this.$refs.cart.offsetLeft-this.$refs.cart.offsetWidth*0.5;
            this.$nextTick(() => {
                el.style.webkitTransform = 'translate3d(0,10px,0)';
                el.style.transform = 'translate3d(0,10px,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webkitTransform = `translate3d(${endX}px,0,0) scale(0.5)`;
                inner.style.transform = `translate3d(${endX}px,0,0) scale(0.5)`;
                el.addEventListener('transitionend', done);
            })
        },
        afterDrop(el) {
            let ball = this.dropBalls.shift();
            if (ball) {
                ball.show = false;
                el.style.display = 'none';
            }
         }
    }
}
</script>
<style lang="scss" scoped>
.bottom-btn-wrapper {
    height: 46px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    button {
        flex: 1 0 33.3%;
        height: 46px;
        border: 0;
        background: #fff;
        color: #fff;
        border-radius: 0;
        &.btn1 {
            background: #ffb320;
            &:active {
                background: #ffb350;
            }
        }
        &.btn2 {
            background: #f60;
            &:active {
                background: #f64;
            }
        }
        &.add-cart {
            flex: 0 1 50px;
            width: 50px;
            color: #000;
            &:active {
                background: #f1f1f1;
            }
        }
    }
}

.ball-container {
    .ball {
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 200;
        transition: all 0.4s linear;
        // cubic-bezier(0.49, -0.29, 0.75, 0.41)

        .inner {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #f60;
            transition: all 0.4s linear;
            background-size: 50px;
            background-repeat: no-repeat;
        }
    }
}
</style>

