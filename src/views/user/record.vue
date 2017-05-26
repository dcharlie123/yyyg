<template>
    <div class="record-wrapper">
        <back back="X"></back>
        <div class="record-content" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <div v-for="i  in 20">
                <goods-list></goods-list>
            </div>
        </div>
        <div class="no-record gray-font-14">
            已无更多记录
        </div>
    </div>
</template>
<script>
    import back from '../../components/back.vue'
    import goodsList from './goods-list.vue'
    export default {
        data() {
            return {
                busy: false
            }
        },
        methods: {
            loadMore() {
                setTimeout(function() {
                    console.log(1);
                    this.busy = true;
                }, 500);
                this.busy = false;
            }
        },
        components: {
            back,
            goodsList
        }
    }
</script>
<style lang="scss" scoped>
    .record-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        .back {
            padding: 12px;
        }
        .record-content {
            margin-top: 40px;
        }
        .no-record {
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-top: 15px;
            margin-bottom: 0;
            background: #f1f1f1;
        }
    }
</style>
