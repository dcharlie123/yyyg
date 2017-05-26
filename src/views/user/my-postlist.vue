<template>
    <div class="postlist">
        <postlist-item></postlist-item>
    </div>
</template>
<script>
import postlistItem from '../../components/postlist-item.vue'
export default {
  components:{
      postlistItem
  }
}
</script>
<style lang="scss">
.postlist {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f1f1f1;
}
</style>


