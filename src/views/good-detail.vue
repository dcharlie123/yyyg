<template>
    <div>
        <div class="good-detail" :style="showSide?showSideStyle:''">
            <header>
                <a @click="back" class="back">&lt;</a>
                <swiper ref="detailSwiperr" class="detail-swiper" :options="detailSwiperOption">
                    <swiper-slide v-for="(image,index) in goodsDetail.thumbs" key="index">
                        <img :src="image.img" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="good-detail-info border-1px">
                    <div class="info">
                        <span class="good-detail-title">(第{{goodsDetail.period}}云){{goodsDetail.title}}</span>
                        <span class="good-detail-desc orange-font-14">({{goodsDetail.second_title}})</span>
                        <p class="gray-font-10">价值:￥{{goodsDetail.money}}</p>
                    </div>
                    <m-progress v-if="goodsDetail.is_win==0&&goodsDetail.remainder>0" :progress="progress"></m-progress>
                    <had-full v-else-if="goodsDetail.is_win==0 && goodsDetail.remainder==0"></had-full>
                    <get-user v-else-if="goodsDetail.is_win==1"></get-user>
                </div>
                <div class="join-or" v-if="state==1||state==0">
                    <p class="gray-font-14">您还未登录,请登录后查看</p>
                    <p class="gray-font-14" v-if="user_join<1">您还没参加哦,去试试吧</p>
                    <p class="gray-font-14" v-else>您已参与
                        <em class="orange-font-14">{{user_join}}</em>人次</p>
                </div>
            </header>
            <section class="go-detail-img">
                <m-list title="图文详情" v-if="state!=2" @click.native="onshowSide"></m-list>
                <m-list title="商品晒单" v-if="state!=2"></m-list>
            </section>
            <section class="detail-tab">
                <ul class="detail-tab-header">
                    <li @click="toggleView('buy-records')" :class="{'active':currentView=='buy-records'}">参加记录</li>
                    <li @click="toggleView('history-win')" :class="{'active':currentView=='history-win'}">历史获得者</li>
                </ul>
                <div class="detail-tab-content">
                    <transition name="fade">
                        <component :is="currentView" :state.sync="state"></component>
                    </transition>
                </div>
            </section>
            <bottom-btn :isFull="goodsDetail.remainder==0" :goodsDetail="goodsDetail"></bottom-btn>
        </div>
        <transition name='fadeSide'>
            <div class="side" v-show="showSide">
                <div class="inner-side">
                    <div @click="hiddenSide" class="hiddenSide">X</div>
                </div>
            </div>
        </transition>
        <transition name="fadeMask">
            <div class="mask" v-show="showSide" @click="hiddenSide"></div>
        </transition>
    </div>
</template>
<script>
import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'
import mProgress from '../components/progress.vue'
import hadFull from '../components/had-full.vue'
import getUser from '../components/getuser.vue'
import mList from '../components/list.vue'
import bottomBtn from '../components/bottom-btn.vue'
import buyRecords from '../components/buy-records.vue'
import historyWin from '../components/history-win.vue'
import mycart from '../views/mycart/mycart.vue'
export default {
    data() {
        return {
            user_join: 1,
            detailSwiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplayDisableOnInteraction: false,
                autoplay: 3000,
                loop: true
            },
            state: 0, //0：正常状态下,1：已满员,2:已开奖
            currentView: 'buy-records',//tab默认
            showSide: false,//侧栏显示隐藏
            showSideStyle: {//侧栏显示隐藏时主体部分的样式
                overflow: 'hidden'
            },
            goodsDetail: {}
        }
    },
    computed: {
        progress() {
            return { "all": this.goodsDetail.all, "participate": this.goodsDetail.participate, "remainder": this.goodsDetail.remainder }
        }
    },
    mounted() {
        this.$ajax.get("/goods/" + this.$route.params.goods_id + "/period/" + this.$route.params.period).then((res) => {
            if (res.status === 200) {
                this.goodsDetail = res.data.data;
            }
        })
        // this.$route.params
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        toggleView(view) {
            this.currentView = view
        },
        onshowSide() {
            this.showSide = true
        },
        hiddenSide() {
            this.showSide = false
        }
    },
    components: {
        swiper,
        swiperSlide,
        mProgress,
        hadFull,
        getUser,
        mList,
        bottomBtn,
        buyRecords,
        historyWin
    }
}
</script>
<style lang="scss" scoped>
.good-detail {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    padding-bottom: 46px;
    right: 0;
    background: #f1f1f1;
    z-index: 98;
    header {
        background: #fff;
        .back {
            font-family: sans-serif;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
            color: #f60;
            font-size: 26px;
            padding: 10px 20px;
            box-sizing: border-box;
        }
        .detail-swiper {
            height: 270px;
            background: #fff;
            .swiper-slide {
                display: flex;
                justify-content: center;
                img {
                    max-width: 270px;
                    width: 100%;
                    height: inherit;
                }
            }
        }
        .good-detail-info {
            padding-bottom: 10px;
            .info {
                padding: 10px 16px 2px;
                .good-detail-title {
                    font-size: 15px;
                    padding: 0 6px;
                }
            }
        }
        .join-or {
            text-align: center;
            padding: 5px 0;
        }
    }
    .go-detail-img {
        margin-top: 10px;
    }
    .detail-tab {
        margin-top: 10px;
        background: #fff;
        .detail-tab-header {
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
                height: 48px;
                flex: 0 1 50%;
                text-align: center;
                &.active {
                    color: #f60;
                    border-bottom: 2px solid #f60;
                }
            }
        }
        .detail-tab-content {
            margin-bottom: 46px;
        }
    }
}

.side {
    width: 85%;
    position: fixed;
    top: 0;
    height: 100%;
    right: 0;
    z-index: 100;
    background: #fff;
    .inner-side {
        width: 100%;
        height: 100%;
        overflow: auto;
        position: relative;
        .hiddenSide {
            width: 50px;
            height: 50px;
            position: absolute;
            bottom: 10px;
            line-height: 50px;
            text-align: center;
            background: rgba(7, 17, 27, .2);
            border-radius: 50%;
            font-size: 18px;
            color: #fff;
            left: 50%;
            transform: translateX(-50%);
            &:active {
                background: #f60;
            }
        }
    }
}

.mask {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background: rgba(7, 17, 27, .5);
}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: translateY(10px);
}

.fadeSide-enter-active,
.fadeSide-leave-active {
    transition: all .2s ease-in-out;
}

.fadeSide-enter,
.fadeSide-leave-active {
    transform: translateX(85%) translateZ(0);
}

.fadeMask-enter-active,
.fadeMask-leave-active {
    transition: all .3s;
}

.fadeMask-enter,
.fadeMask-leave-active {
    opacity: 0;
}
</style>


