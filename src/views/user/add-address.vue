<template>
    <div class="all-wrapper">
        <ul>
            <li class="input-list">收货人
                <input type="text">
            </li>
            <li class="input-list">手机号
                <input type="text">
            </li>
            <li>所在地址:
                <v-distpicker></v-distpicker>
            </li>
            <li class="input-list">详细地址
                <input type="text">
            </li>
            <li class="input-list">邮编:
                <input type="text">
            </li>
            <li class="default-list">设为默认地址
                <label for="isDefault">
                    <input type="checkbox" class="switch" id="isDefault" v-model="isDefault">
                </label>
            </li>
        </ul>
        <button class="add-address">确认添加</button>
    </div>
</template>

<script>
import Distpicker from 'v-distpicker'
export default {
    data() {
        return {
            isDefault: false
        }
    },
    components: {
        'v-distpicker': Distpicker
    }
}
</script>

<style lang="scss" scoped>
@import "../../css/comm.scss";
ul {
    padding: 10px 10px 4px 10px;
    background: #fff;
    font-size: 14px;
    .input-list {
        height: 36px;
        line-height: 36px;
        background: #fff;
        margin: 3px 0;
        input {
            border: 0;
            width: 60%;
            padding-left: 10px;
            height: 30px;
            line-height: 30px;
        }

    }
    .default-list{
        height: 36px;
        line-height: 36px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
}

.address {
    display: flex;
    flex-direction: column;
    select{
        margin-bottom: 10px !important;
    }
}
label{
    display: inline-block;
    height: 32px;
}
.switch {
    width: 56px;
    height: 32px;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #f1f1f1;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    transition: all 0.3s ease-in;
    // margin-top:5px;
    vertical-align: middle;
    &::before {
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #dfdfdf;
        border-radius: 20px;
        background: #fff;
        position: absolute;
        top: -1px;
        left: 0;
        transition: all 0.3s ease-in;
    }
    &:checked::before {
        left: 23px;
    }
    &:checked {
        background: $main-color;
    }
}
.add-address{
    width: 55%;
    height: 36px;
    line-height: 36px;
    display: block;
    margin: 20px auto;
    border-color: $main-color;
    background: $main-color;
    color:#fff;
    &:active{
        background: #f64;
        box-shadow: 0 0 2px 2px #ccc;
    }
}
</style>
