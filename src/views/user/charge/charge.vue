<template>
    <div class="all-wrapper">
        <h6>您当前的余额：￥0.00</h6>
        <div class="money-card">
            <ul @click="selectMoney($event)" class="clearfix">
                <li data-money='50' :class="{'checked':rechargeMoney==50}">50</li>
                <li data-money='100' :class="{'checked':rechargeMoney==100}">100</li>
                <li data-money='200' :class="{'checked':rechargeMoney==200}">200</li>
                <li data-money='500' :class="{'checked':rechargeMoney==500}">500</li>
                <li data-money='1000' :class="{'checked':rechargeMoney==1000}">1000</li>
                <li :class="{'checked':rechargeMoney==undefined}">
                    <input type="number" placeholder="请输入" maxlength="8" v-model="inputMoney">
                </li>
            </ul>
        </div>
        <ul class="select-payway">
            <li class="border-1px">
                <span>选择网银</span>
                <span>需要网银支付￥{{rechargeMoney||inputMoney||'0.00'}}</span>
            </li>
            <li>
                <span>京东支付</span>
                <div>
                    <input type="radio" id="radio1" name="payway" class="payway">
                    <label for="radio1"></label>
                </div>
    
            </li>
            <li>
                <span>支付宝</span>
                <div>
                    <input type="radio" id="radio2" name="payway" class="payway">
                    <label for="radio2"></label>
                </div>
            </li>
        </ul>
        <button class="pay-btn">确认充值</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            rechargeMoney:'50',
            inputMoney:''
        }
    },
    methods:{
        selectMoney(ev){
           this.rechargeMoney=ev.target.dataset.money
           console.log(this.rechargeMoney);
        }
    }
}
</script>

<style lang="scss" scoped>
h6{
    text-align: center;
    font-size: 14px;
}
.money-card {
    ul {
        li {
            display: inline-block;
            float: left;
            width: 29%;
            height: 40px;
            line-height: 40px;
            border-radius: 3px;
            margin-bottom: 10px;
            margin-left: 10px;
            padding-left: 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            position: relative;
            font-size: 14px;
            text-align: center;
            background: #fff;
            input {
                border: 0;
                width: 90%;
                height: 30px;
                text-align: center;
            }
            &.checked {
                border: 1px solid #f60;
                &::before {
                    content: '';
                    display: block;
                    width: 0px;
                    height: 0px;
                    border-right: 10px solid #f60;
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid #f60;
                    border-left: 10px solid transparent;
                    border-radius: 2px;
                    position: absolute;
                    right: -1px;
                    bottom: -1px;
                }
                &::after {
                    content: "+";
                    display: block;
                    color: #fff;
                    position: absolute;
                    right: 1px;
                    bottom: -13px;
                }
            }
        }
    }
}

.select-payway {
    li {
        display: block;
        height: 40px;
        line-height: 40px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        span {
            margin: 0 10px;
            &:last-child {
                color: #777;
                font-size: 13px;
            }
        }
        .payway {
            display: none;
            padding: 20px 100px;
            &+label {
                display: inline-block;
                width: 18px;
                height: 18px;
                border: 2px solid #ccc;
                border-radius: 50%;
                line-height: 18px;
                text-align: center;
                position: relative;
                margin-right: 10px;
                margin-top: 15px;
            }
            &+label::after{
                content: "";
                display: inline-block;
                height: 40px;
                width: 999px;
                position: absolute;
                left: -999px;
                background: transparent;
            }
            &:checked+label {
                border: 1px solid #f60;
            }
            &:checked+label::before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -6px;
                margin-top: -6px;
                width: 12px;
                height: 12px;
                text-align: center;
                border-radius: 50%;
                background: #f60;
            }
        }
    }
}

.pay-btn {
    height: 50px;
    width: 70%;
    margin: 50px 15%;
    background: #f60;
    color: #fff;
    border: 0;
    &:active {
        background: #f64;
    }
}
</style>
