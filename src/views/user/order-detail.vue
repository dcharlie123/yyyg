<template>
  <div class="order-detail">
    <header>
      <h3>已发货</h3>
      <p>发货啦，请注意签收哦！</p>
    </header>
    <section>
      <div class="order-delivery border-1px">
        <i>+</i>
        <span class="order-info">您的商品[盼盼 法式软面包 300g/袋x3袋]由邮政快递[单号：9890710545709]配送，请留意收货。</span>
        <i>></i>
      </div>
      <div class="user-address border-1px">
        <i>+</i>
        <div class="address">
          <div class="name-phone">
            <span>收货人：XXX</span>
            <span>18089444555</span>
          </div>
          <div class="address-info">
            广东省 潮州市 枫溪
          </div>
        </div>
      </div>
      <div class="order-goods">
        <img src="../../images/test1.jpg" alt="">
        <div class="order-goods-text">
          <p>(第n云)奥术大师多</p>
          <p class="gray-font-12">价值:￥36.00</p>
          <p class="gray-font-12">订单号:100000</p>
        </div>
      </div>
      <div class="serve">
        <i>+</i> 客服热线:4000-588-688
      </div>
    </section>
    <footer>
      <button>分享</button>
      <button @click="showDelivery">查看物流</button>
      <button>确认收货</button>
    </footer>
  </div>
</template>
<script>
  export default {
    methods:{
      showDelivery(){
         this.$router.push({path:'/user/showDelivery'})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .order-detail {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f1f1f1;
    header {
      width: 100%;
      height: 80px;
      background: #f60;
      margin-top: 0;
      margin-bottom: 0;
      padding: 10px 0 0 10px;
      color: #fff;
      box-sizing: border-box;
      h3 {
        margin: 0;
        padding: 10px 0;
      }
    }
    section {
      .order-delivery,
      .user-address {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        line-height: 1.5;
        padding: 12px 0;
        background: #fff;
        i {
          flex: 0 1 6%;
          margin: 0 5px;
          text-align: center;
        }
        .order-info {
          flex: 0 1 80%;
        }
        .address {
          flex: 0 1 90%;
          .name-phone {
            display: flex;
            justify-content: space-between;
            padding-right: 15px;
          }
        }
      }
      .order-goods {
        display: flex;
        align-items: center;
        padding: 10px 0;
        margin: 10px 0;
        background: #fff;
        img {
          flex: 0 1 15%;
          height: 50px;
          margin-right: 10px;
        }
        p {
          &:first-child {
            font-size: 14px;
          }
          font-size: 12px;
        }
      }
      .serve {
        text-align: center;
        padding: 10px 0;
        color: #999;
        font-size: 14px;
        background: #fff;
      }
    }
    footer{
      height: 46px;
      position: fixed;
      bottom:0;
      left:0;
      right: 0;
      background: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button{
        height: 35px;
        border-color: #f60;
        color:#f60;
        border-radius: 3px;
        &:active{
          background: #f60;
          color:#fff;
        }
        &:nth-child(1){
          // min-width: 
          flex:0 1 17%;
        }
        &:nth-child(2){
          flex:0 1 39%;
        }
        &:nth-child(3){
          flex: 0 1 39%;
          background: #f60;
          color: #fff;
          &:active{
            background: #ff5000;
          }
        }
      }
    }
  }
</style>

