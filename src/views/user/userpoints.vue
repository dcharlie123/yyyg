<template>
    <div class="userpoints">
        <div class="userpoints-header">
            <p class="userpoints-points">可用<em>23</em>福分</p>
            <p>100福分=1元，支付时可抵现金0.00元</p>
        </div>
        <div class="points-dlist">
            <h6 class="points-dlist-title">福分明细</h6>
            <ul>
                <li class="border-1px dlist">
                    <div>
                        <p class="back-font-12">云购商品编码(11985483)支付1元获得福分</p>
                        <p class="gray-font-12">2017.05.15 19:15:09</p>
                    </div>
                    <span class="add">+1</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .userpoints {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        .userpoints-header{
            padding-top: 27px;
            color:#999;
            text-align: center;
            .userpoints-points{
                font-size: 20px;
                line-height: 2;
                em{
                    color: #f60;
                    font-size: 24px;
                    font-style: normal;
                    padding: 0 5px;
                }
            }
        }
        .points-dlist{
            .points-dlist-title{
                text-align: center;
                font-size: 16px;
                position: relative;
                margin: 20px 0;
                color:#777;
                &::before{
                    content: '';
                    width: 40%;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    position: absolute;
                    top:8px;
                    left: 00px;
                    // right: 0;
                    transform: scaleY(0.5);
                }
                &::after{
                    content: '';
                    width: 40%;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    position: absolute;
                    top:8px;
                    // left: 0px;
                    // right: 0;
                    transform: scaleY(0.5);
                    right: 0px;
                }
            }
            .dlist{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
                // margin: 0 5px;
                div{
                    margin-left: 8px;
                }
                &>span{
                     margin-right: 8px;   
                }
                
            }
        }
    }
</style>
