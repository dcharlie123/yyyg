<template>
    <div class="inputnum-wrapper">
        <button :class="{disable:mynum?mynum<=1:mynum>1}" @click="decrease">-</button>
        <input type="number" v-model="mynum" autofocus="autofocus">
        <button @click="add">+</button>
    </div>
</template>
<script>
    import Bus from '../common/bus.js';
    export default {
        data() {
            return {
                mynum: 1||this.num
            }
        },
        props: {
            num:null
        },
        watch:{
            mynum(val){
                Bus.$emit('num', val);
            }
        },
        methods: {
            decrease() {
                if (this.mynum > 1) {
                    this.mynum--;
                }
                
            },
            add() {
                this.mynum++;
            }
        }
    }
</script>
<style lang="scss">
    $border-color:rgba(0, 0, 0, .1);
    .inputnum-wrapper {
        display: flex;
        width: 120px;
        height: 30px;
        button {
            width: 25%;
            background: #fff;
            border: 1px solid $border-color;
            &:first-child {
                border-radius: 5px 0 0 5px;
            }
            &:last-child {
                border-radius: 0 5px 5px 0;
            }
            &:hover {
                outline: none;
            }
            &.disable {
                color: #ccc;
            }
        }
        input {
            text-align: center;
            width: 50%;
            border: 0;
            border-top: 1px solid $border-color;
            border-bottom: 1px solid $border-color;
            &:link,
            &:visited,
            &:hover,
            &:active {
                outline: none;
            }
        }
    }
</style>

