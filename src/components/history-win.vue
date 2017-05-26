<template>
  <div>
      <section v-infinite-scroll="loadMore" infinite-scroll-disabled="isbusy" infinite-scroll-distance="10">
          <p>第127461云</p>
          <div>{{state}}</div>
      </section>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                isbusy:false
            }
        },
        props:{
            state:{
                type:Number
            }
        },
        methods:{
            loadMore(){
                this.isbusy=true
            }
        }
    }
</script>
