<template>
    <div class="all-wrapper">
        <div class="delivery-address-item">
            <header>
                <span>username</span>
                <span>15089785183</span>
            </header>
            <p class="address">广东省 潮州市 xxx xxxx</p>
            <footer>
                <div>
                    <input type="radio" id="isDefault" name="isDefault" class="default">
                    <label for="isDefault"></label> 设为默认地址
                </div>
                <div>
                    <span>编辑</span>
                    <span>删除</span>
                </div>
            </footer>
        </div>
        <button class="addAddress" @click="$router.push({path:'/user/add-address'})">添加地址</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addressData: ['']
        }
    }
}
</script>

<style lang="scss" scoped>
.delivery-address-item {
    width: 100%;
    min-height: 60px;
    margin-bottom: 5px;
    background: #fff;
    padding: 8px 0;
    header {
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-size: 15px;
    }
    .address {
        margin: 10px 10px 30px 10px;
        color: #666;
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 6px;
        font-size: 13px;
        .default {
            display: none;
            &+label {
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 1px solid #ccc;
                border-radius: 50%;
                line-height: 16px;
                text-align: center;
                position: relative;
                vertical-align: bottom;
                margin-right: 5px;
            }
            &:checked+label {
                border: 1px solid #f60;
                margin-right: 5px;
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
            &+label::after {
                content: "";
                display: inline-block;
                height: 40px;
                width: 100px;
                position: absolute;
                top:-10px;
                right: -120px;
                background: transparent;
            }
        }
    }
}
.addAddress{
    width: 60%;
    height: 32px;
    line-height: 32px;
    display: block;
    margin: 20px auto;
    border-color:#f60;
    color:#f60;
}
</style>
