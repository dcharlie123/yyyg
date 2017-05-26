<template>
    <div class="all-product-wrapper">
        <div class="search">
            <input type="text" placeholder="搜索" @focus="goSearch">
        </div>
        <div class="all-product-nav">
            <ul class="nav">
                <li v-for="(item,index) in navlist" :class="{'active':currentIndex==index}" @click="selectType(index)">{{item}}</li>
            </ul>
        </div>
        <div class="all-product-content">
            <ul class="orderBy">
                <li v-for="(i,index) in contentnav" :class="{'active':currentOrderIndex==index}" @click="selectOrder(index)">{{i}}</li>
            </ul>
            <div class="content">
                <div class="content-wrapper">
                    <div class="wrapper" v-for="i in allGoods">
                        <index-product-item :goodsItem="i" @add="addCart"></index-product-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import indexProductItem from '../index/components/index-product-item.vue'
import Bus from '../../common/bus.js'
export default {
    data() {
        return {
            currentIndex: 0,
            currentOrderIndex: 0,
            navlist: ['全部', "手机数码", "电脑办公", "钟表首饰", "家用电器", "化妆护理", "食品饮料", "家居家纺", "礼品箱包", "运动户外", "营养保健", "母婴", "汽车", "房子", "其他商品", "限购"],
            contentnav: ['即将揭晓', '人气', '最新', '价格'],
            allGoods: {},
            selectGoods: []
        }
    },
    mounted() {
        let _this_ = this;
        this.$ajax.get('https://www.easy-mock.com/mock/59165c589aba4141cf225605/mock/goods').then(function (res) {
            _this_.allGoods = res.data.data
        })
    },
    methods: {
        selectType(index) {
            this.currentIndex = index;
        },
        selectOrder(index) {
            this.currentOrderIndex = index;
        },
        goSearch() {
            this.$router.push({ path: '/search' })
        },
        addCart(target) {
            this.$emit('add', target);
        }
    },
    components: {
        "index-product-item": indexProductItem
    }
}
</script>
<style lang="scss" scoped>
@import '../../css/comm.scss';
$nav-height:46px;
$nav-width:18%;
$search-height:36px;
.all-product-wrapper {
    min-height: 100%; // overflow: hidden;
    .search {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: $search-height;
        line-height: $search-height;
        z-index: 997;
        background: #f1f1f1;
        input {
            display: block;
            margin: 3px auto;
            width: 96%;
            height: $search-height - 6px; // line-height: $search-height - 10px;
            border: 1px solid rgba(7, 17, 27, .1);
            border-radius: $search-height;
            padding: 2px 30px;
            box-sizing: border-box;
        }
    }
    .all-product-nav {
        max-width: 640px;
        position: fixed;
        overflow-x: hidden; // padding-right: 50px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        background: #f1f1f1;
        width: $nav-width;
        left: 0;
        top: $search-height;
        bottom: $tabbar-height;
        .nav {
            li {
                position: relative;
                display: block;
                width: 100%;
                font-size: 12px;
                height: $nav-height;
                line-height: $nav-height;
                text-align: center;
                &.active {
                    background: #fff;
                    &::before {
                        content: '';
                        display: inline-block;
                        width: 2px;
                        height: 20px;
                        background: #f60;
                        position: absolute;
                        left: 0;
                        top: ($nav-height - 20px)/2;
                    }
                }
            }
        }
    }
    .all-product-content {
        position: fixed;
        left: $nav-width;
        right: 0;
        top: $search-height;
        bottom: 0;
        height: 100%;
        background: #fff;
        .orderBy {
            position: fixed;
            left: $nav-width;
            top: $search-height;
            right: 0;
            z-index: 99;
            display: flex;
            justify-content: space-around;
            li {
                text-align: center;
                display: block;
                width: 100%;
                height: $nav-height;
                line-height: $nav-height;
                font-size: 12px;
                background: #fff;
                &.active {
                    color: #f60;
                }
            }
        }
        .content {
            height: 100%; // width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            position: absolute;
            top: 46px;
            left: 0;
            right: 0; // bottom: 50px; 
            //  padding-bottom: 100px;
            .content-wrapper {
                display: table;
                clear: both;
                width: 100%;
                height: 100%;
                padding-bottom: 128px;
            }
            .wrapper {
                width: 48%;
                float: left;
                margin: 8px 1%;
            }
            @media (max-width:359px) {
                .wrapper {
                    width: 43%;
                    overflow: hidden;
                    margin: 8px 1px;
                }
            }
        } // .content {
        //     width: 100%;
        //     height: 100%;
        //     position: absolute;
        //     top: 0;
        //     bottom: $tabbar-height;
        //     right: 0;
        //     left: 0;
        //     // overflow: hidden;
        //     background: #fff;
        //     margin: $nav-height 0;
        //     display: table;
        //     clear: both;
        //     .content-wrapper {
        //         position: relative;
        //         width: 100%;
        //         height: 100%;
        //         overflow-x: hidden;
        //         overflow-y: auto;
        //         -webkit-overflow-scrolling: touch;
        //         // padding-bottom: $tabbar-height + 35px;
        //         .wrapper {
        //             width: 48%;
        //             float: left;
        //             margin: 8px 1%;
        //         }
        //     }
        // }
    }
}
</style>
