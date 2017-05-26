<template>
    <div class="lottery-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="clearfix">
            <div v-for="i in item" class="border-1px lottery-item-wrapper ">
                <lottery-item></lottery-item>
            </div>
        </div>
        <loading :loading="busy"></loading>
    </div>
</template>
<script>
    import lotteryItem from './lottery-item.vue';
    import refresh from '../../components/refresh.vue';
    import loading from '../../components/loading.vue';
    export default {
        data() {
            return {
                item: 10,
                busy: false,
                top: 0
            }
        },
        mounted() {},
        components: {
            'lottery-item': lotteryItem,
            refresh,
            loading
        },
        methods: {
            loadMore() {
                this.busy = true;
                setTimeout(() => {
                    this.item+=20;
                    this.busy = false;
                }, 5000);
            }
        }
    }
</script>
<style lang="scss">
    .lottery-wrapper {
        background: #fff;
        .lottery-item-wrapper {
            width: 50%;
            float: left;
        }
    }

</style>
