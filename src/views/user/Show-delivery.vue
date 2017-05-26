<template>
    <div class="show-delivery">
        <div class="delivery-com">
            <img src="../../images/test1.jpg" alt="">
            <div class="delivery-com-text">
                <p class="gray-font-12">承运公司</p>
                <p class="gray-font-12">物流单号</p>
                <p class="gray-font-12">官方电话</p>
            </div>
        </div>
        <div class="delivery-line">
            <h4 class="delivery-title border-1px">
                物流跟踪信息
            </h4>
            <div class="delivery-line-content">
                <div class="delivery-line-item" v-for="i in 10">
                    <i>+</i>
                    <span>adsadasdadfsafasf</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
.show-delivery {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f1f1f1;
    .delivery-com {
        display: flex;
        height: 90px;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        margin-bottom: 10px;
        img {
            flex: 0 1 18%;
            width: 20%;
            height: 66px;
            margin-left: 10px;
            margin-right: 10px;
        }
        .delivery-com-text {
            flex: 0 1 76%;
            p {
                font-size: 14px;
                line-height: 1.2;
            }
        }
    }
    .delivery-line {
        background: #fff;
        .delivery-title {
            padding: 5px 3px;
            font-weight: 400;
            color: #666;
        }
        .delivery-line-content {
           
            .delivery-line-item {
                 &:nth-child(1){
                color: #f60;
            }
                display: flex;
                i {
                    flex: 0 1 10%;
                    text-align: center;
                }
                span {
                    flex: 0 1 88%;
                }
            }
        }
    }
}
</style>

