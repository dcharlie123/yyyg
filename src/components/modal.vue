<template>
    <div name="fade" class="modal-wrapper">
        <div v-show="visible" class="modal" ref="modal">
            <div class="close" @click="close($event)">X</div>
            <div class="desc">
                <img class="desc-img" src="" alt="">
                <div class="desc-text">
                    <h6 class="overflow-el desc-title">(第273502云)苹果(Apple) iphone7 Plus 256G</h6>
                    <p class="leave">剩余<span class="leave-num">2075</span>人次</p>
                    <input-num :num="num"></input-num>
                </div>
            </div>
            <div class="pay">
                余额支付 <span class="money">￥{{num}}</span>
            </div>
        </div>
        <div class="modal-mask" ref='mask' v-show="visible"></div>
    </div>
</template>
<script>
    import Bus from '../common/bus.js';
    import inputNum from '../components/input-num.vue'
    export default {
        data() {
            return {
                visible: false,
                num: 1
            }
        },
        props: {},
        created() {
            var _this_ = this;
            Bus.$on('num', function(mynum) {
                if (mynum >= 1) {
                    _this_.num = parseFloat(mynum);
                } else {
                    _this_.num = 1;
                }
            })
        },
        mounted() {
            this.$refs.mask.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, false);
            this.$refs.modal.addEventListener('touchmove',function(e){
                e.preventDefault();
            })
        },
        methods: {
            close(event) {
                this.visible = false;
                event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
            }
        },
        components: {
            'input-num': inputNum
        }
    }
</script>
<style lang="scss">
    .modal-wrapper {
        overflow: hidden;
    }
    .modal {
        position: fixed;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        z-index: 999;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        background: #fff;
        width: 80%;
        min-height: 220px;
        padding: 12px;
        .close {
            position: absolute;
            top: 8px;
            right: 8px;
        }
        .desc {
            display: flex;
            margin-top: 10px;
            .desc-img {
                flex: 0 0 70px;
                width: 70px;
                height: 70px;
            }
            .desc-text {
                flex: 0 1 auto;
                overflow-x: hidden;
                margin-left: 10px;
                margin-bottom: 12px;
                .desc-title {
                    margin: 5px 0 0 0;
                    font-size: 12px;
                }
                .leave {
                    font-size: 11px;
                    margin: 5px 0 5px 0;
                    .leave-num {
                        color: #f60;
                    }
                }
            }
        }
        .pay {
            .money {
                color: #f60;
            }
        }
    }
    .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 998;
        background: rgba(0, 0, 0, .5);
    }
</style>

