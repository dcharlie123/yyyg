<template>
    <div class="index-lottery-item-wrapper">
        <img src="../../../images/test1.jpg" alt="">
        <p class="index-lottery-item-title">倒计时</p>
        <div class="index-lottery-item-time">
            02:51:13
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .index-lottery-item-wrapper {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        img{
            width: 46px;
            height: 46px;
            padding: 5px;
        }
        .index-lottery-item-title {
            font-size: 10px;
            color: #999;
            margin-bottom: 4px;
        }
        .index-lottery-item-time {
            font-size: 12px;
            color: #f60;
            border: 1px solid rgba(0,0,0,.1);
            padding: 3px 12px;
            border-radius: 10px;
        }
    }
</style>
