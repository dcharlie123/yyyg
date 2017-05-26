<template>
    <div @scroll="onScroll($event)" ref="outwrapper">
        <!--<div class="inner" ref="innerwrapper">
            <slot></slot>
            111
        </div>-->
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isLoading:false
            }
        },
        props:{
            loadDisabled:{
                type:Boolean,
                default:false
            }
        },
        methods: {
            onScroll(ev) {
                // if(!this.isLoading || this.loadDisabled){
                //     return
                // }
                console.log(1)
                // let outerHeight = this.$refs.outwrapper.clientHeight;
                // let innerHeight = this.$refs.innerwrapper.clientHeight;
                // if(){

                // }
            }
        }
    }
</script>
<style lang="scss">

</style>

