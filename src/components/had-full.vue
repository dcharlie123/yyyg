<template>
    <div class="had-full-wrapper">
        <img class="had-full-img" src="../images/icon/icon_fullperson.png" alt="">
        <div class="timer">
            <p class="orange-font-14">揭晓结果即将公布</p>
            <timer></timer>
        </div>
    </div>
</template>
<script>
    import timer from '../components/timer.vue'
    export default {
        components: {
            timer
        }
    }
</script>

<style lang="scss">
@import "../css/comm.scss";
    .had-full-wrapper {
        width: 90%;
        min-height: 80px;
        margin: 8px auto;
        border: 1px solid $main-color;
        border-radius: 5px;
        background-color: #fffbe3;
        position: relative;
        .had-full-img {
            position: absolute;
            top: -3px;
            left: -3px;
            width: 50px;
            height: 50px;
        }
        p {
            text-align: center;
        }
        .timer {
            margin-top: 18px;
            margin-bottom: 18px;
        }
    }
</style>

