<template>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="isbusy" infinite-scroll-distance="100" @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)" @touchend="onTouchEnd($event)" :style="{ transform:'translate3d(0,'+dist+'px,0)'}"
        class="buyRecords">
        <m-list v-for="(i,index) in item" key="index" :title="state"></m-list>
    </div>
</template>
<script>
    import mList from './list.vue'
    export default {
        data() {
            return {
                isbusy: false,
                item: 10,
                start: 0,
                dist: 0,
                islock: false
            }
        },
        props: {
            state: {
                type: Number
            }
        },
        methods: {
            loadMore() {
                this.isbusy = true;
                let _this_ = this;
                setTimeout(function() {
                    if (_this_.item < 30) {
                        _this_.item += 10;
                    }
                    _this_.isbusy = false;
                }, 500);
            },
            onTouchStart(ev) {
                this.start = ev.touches[0].pageY;
            },
            onTouchMove(ev) {
                if (!this.islock) {
                    let innerDist = (ev.touches[0].pageY - this.start) * 4;
                    if (innerDist < 0) {
                        this.dist = innerDist;
                    }
                    this.islock = true;
                }
            },
            onTouchEnd(ev) {
                this.dist = 0;
                this.start = 0;
                this.islock = false;
            }
        },
        components: {
            mList
        }
    }
</script>
<style lang="scss">
    .buyRecords {
        transition: all 0.5s;
    }
</style>

