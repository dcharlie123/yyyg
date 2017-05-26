<template>
    <div class="index-lottery-wrapper">
        <header class="index-lottery-header">
            <section>最新揭晓</section>
            <swiper :options="swiperOption" class="v-swiper">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                <swiper-slide>Slide 10</swiper-slide>
            </swiper>
        </header>
        <div class="index-lottery-item">
            <index-lottery-item v-for="(i,index) in 4" key="index"></index-lottery-item>
        </div>
    </div>
</template>
<script>
    import indexLotteryItem from './index-lottery-item.vue';
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption: {
                    direction: 'vertical',
                    autoplay: 600,
                    loop: false,
                    autoplayDisableOnInteraction: false
                }
            }
        },
        components: {
            swiper,
            swiperSlide,
            'index-lottery-item': indexLotteryItem
        }
    }
</script>
<style lang="scss">
    .index-lottery-wrapper {
        background-color: #fff;
        margin: 10px 0 4px 0;
        .index-lottery-header {
            position: relative;
            display: flex;
            padding: 5px;
            justify-content: space-between;
            align-items: center;
            &::after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                border-bottom: 1px solid rgba(7, 17, 27, .1);
                transform: scaleY(0.3);
                box-sizing: border-box;
            }
            .v-swiper {
                height: 20px;
            }
        }
        .index-lottery-item {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding-bottom: 12px;
        }
    }
</style>
