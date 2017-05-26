<template>
  <div class="goods-list border-1px">
    <img class="goods-img" src="../../images/test1.jpg" alt="">
    <div class="goods-info">
      <p class="overflow-el goods-name">(已更新至第284164云)苹果（Apple）iPhone 7 Plus 128G版 4G手机</p>
      <div>
        <p class="gray-font-12">获得者：<span class="winner"></span></p>
        <p class="gray-font-12">揭晓时间:昨天</p>
        <p class="orange-font-12">第100云进行中</p>
        <i class="add-cart" v-if="hasAddCart"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    hasAddCart:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods-list {
    height: 90px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    position: relative;
    .goods-img {
      width: 66px;
      height: 66px;
      flex: 1 0 66px; // border: 1px solid red;
      // margin-right: 10px;
    }
    .goods-info {
      flex: 1 0 75%;
      width: 80%;
      .goods-name {
        font-size: 14px;
      }
      .add-cart {
        position: absolute;
        right: 12px;
        bottom:12px;
        width: 30px;
        height: 30px;
        background-image: url('../../images/icon/add_to_cart_normal.png');
        background-repeat: no-repeat;
        background-size: 30px;
        &:active {
          background-image: url('../../images/icon/add_to_cart_press.png');
        }
      }
    }
  }
</style>
