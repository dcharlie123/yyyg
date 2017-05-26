<template>
  <div>
      <ul class="index-nav-wrapper">
          <li><img src="../../../images/icon/home_navigation_limited.png" alt="">新品</li>
          <li><img src="../../../images/icon/home_navigation_limited.png" alt="">限购</li>
          <li><img src="../../../images/icon/home_navigation_limited.png" alt="" @click="$router.push({path:'/postList'})">晒单</li>
          <li><img src="../../../images/icon/home_navigation_limited.png" alt="">新手</li>
          <li><img src="../../../images/icon/home_navigation_limited.png" alt="">充值</li>
      </ul>
  </div>
</template>
<script>
    export default{}
</script>
<style lang="scss">
    .index-nav-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 90px;
        // line-height: 80px;
        background-color: #fff;
        li{
            flex:0 1 18%;
            height:80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 3px 10px;
            color:#999;
            font-size: 13px;
            img{
                width: 40px;
                height: 40px;
                flex:0 0 40px;
            }
        }
    }
</style>

