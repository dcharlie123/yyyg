<template>
    <div class="progress-wrapper">
        <div class="progress">
            <p class="progress-item" :style="{ width:progress.participate/progress.all*100+'%' }"></p>
        </div>
        <div class="progress-text" v-show="showText">
            <div>
                <p class="had-join">{{progress.participate}}</p>
                <p>已参与</p>
            </div>
            <div>
                <p>{{progress.all}}</p>
                <p>总需人次</p>
            </div>
            <div>
                <p class="leave">{{progress.remainder}}</p>
                <p>剩余</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            progress: {
                type:Object//进度,默认为0
            },
            showText:{
                type:[Boolean,String]
            }
        }
    }
</script>
<style lang="scss">
    .progress-wrapper {
        margin: 5px 0;
        .progress {
            width: 90%;
            height: 4px;
            margin: 0 auto;
            background-color: rgba(0, 0, 0, .1);
            border-radius: 10px;
            .progress-item {
                margin: 0;
                height: inherit;
                background: #f60;
                border-radius: 10px;
                overflow: hidden;
            }
        }
        .progress-text {
            display: flex;
            flex-direction: row;
            width: 90%;
            margin: 0 auto;
            justify-content: space-between;
            font-size: 10px;
            color: rgba(0, 0, 0, .4);
            div {
                margin-top: 4px;
                p {
                    text-align: center;
                    &.had-join {
                        color: #f60;
                    }
                    &.leave {
                        color: rgb(150, 193, 255)
                    }
                    margin: 2px 0;
                }
            }
        }
    }
</style>
