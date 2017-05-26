<template>
    <div class="search-wrapper">
        <header class="search-header">
            <i class="back" @click="back">&lt;</i>
            <div class="search">
                <i>*</i>
                <input type="text" placeholder="请输入搜索关键词">
                <i>x</i>
            </div>
            <span class="search-btn">搜索</span>
        </header>
    </div>
</template>
<script>
    export default {
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
}
</script>
<style lang="scss" scoped>
    .search-wrapper {
        .search-header {
            width: 100%;
            height: 46px;
            background: #f9f9f9;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .back {
                text-align: center;
                flex: 0 1 20px;
            }
            .search {
                flex: 0 1 60%;
                position: relative;
                i {
                    position: absolute;
                    &:first-child{
                        top:12px;
                        left: 5px;
                    }
                    &:last-child{
                        top:10px;
                        right:-9px;
                    }
                }
                input {
                    width: 100%;
                    // min-width: 250px;
                    height: 36px;
                    background: #f1f1f1;
                    border: #ccc;
                    font-size: 12px;
                    padding-left: 26px;
                    border-radius: 36px;
                }
            }
            .search-btn{
                flex:  0 1 60px;
                text-align: center;
            }
        }
    }
</style>

