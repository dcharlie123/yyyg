<template>
    <div class="loading" v-show="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
export default {
  props:{
      loading:{
          type:Boolean
      }
  }
}
</script>

<style lang="scss">
    .loading {
        text-align: center;
        height: 40px;
        line-height: 40px;
        position: relative;
        span {
            display: inline-block;
            width: 2px;
            height: 10px;
            background: #f60;
            animation: loading 1.4s ease-out infinite;
            &:nth-child(2) {
                animation-delay: -1.2s;
            }
            &:nth-child(3) {
                animation-delay: -1s;
            }
            &:nth-child(4) {
                animation-delay: -0.8s;
            }
            &:nth-child(5) {
                animation-delay: -0.6s;
            }
        }
    }
    @keyframes loading {
        0% {
            transform: scale(0.4);
        }
        25% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.6);
        }
        75% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.4);
        }
    }
</style>

