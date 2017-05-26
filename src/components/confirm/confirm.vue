<template>
  <div class="confirm-wrapper">
    <div class="confirm">
      <div class="content border-1px">{{msg}}</div>
      <div class="confirm-btn">
        <button @click="cancel">取消</button><button @click="confirm">确认</button>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type:String
      },
      index: {
        type:Number
      }
    },
    methods: {
      confirm() {
        this.$emit("confirmHidden",false);
        let index=this.index;
        this.$store.dispatch('update_cur_shop_status', {
          index
        });
        this.$store.dispatch("delete_db");
      },
      cancel(){
        this.$emit("confirmHidden",false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../css/comm.scss";
  .confirm {
    width: 55%;
    min-height: 120px;
    position: fixed;
    z-index: 9992;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      text-align: center;
      flex: 1 0 75%;
      margin-top: 28px;
      color: #666;
    }
    .confirm-btn {
      display: flex;
      justify-content: space-around;
      button {
        height: 36px;
        flex: 0 1 40%; // border: 0;
        margin: 8px 0;
        border-radius: 3px;
        &:first-child {
          border-color: $main-color;
          color: $main-color;
        }
        &:last-child {
          border-color: $main-color;
          background: $main-color;
          color: #fff;
        }
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9991;
    background: rgba(0, 0, 0, .5);
  }
</style>
