<template>
    <div class="all-wrapper">
        <ul class="sets-list">
            <li class="user-avatar border-1px cant">
                <span>头像</span>
                <div>
                    <img src="../../images/user-avatar.jpg" alt="">
                    <i>&gt;</i>
                </div>
            </li>
            <li @click="showModal('a')">
                <span>昵称</span>
                <div class="li-right">
                    <span class="gray-font-14">{{username}}</span>
                    <i>&gt;</i>
                </div>
            </li>
            <li>
                <span>我的主页</span>
                <i class="li-right">&gt;</i>
            </li>
            <li>
                <span>我的等级</span>
                <div class="li-right">
                    <span>云购小将</span>
                    <i>&gt;</i>
                </div>
            </li>
            <li @click="$router.push({path:'/user/delivery-address'})">
                <span>收货地址</span>
                <i class="li-right">&gt;</i>
            </li>
            <li style="display:block;height:10px;background:#f1f1f1"></li>
            <li @click="selectSex">
                <span>性别</span>
                <div class="li-right">
                    <span>{{sex}}</span>
                    <i>&gt;</i>
                </div>
            </li>
            <li>
                <span>生日</span>
                <div class="li-right">
                    <input type="date" v-model="date" style="background:#fff;width:120px;border:0;" value="2017-1-5">
                    <i>&gt;</i>
                </div>
            </li>
            <li>
                <span>QQ号</span>
                <div class="li-right">
                    <span></span>
                    <i>&gt;</i>
                </div>
            </li>
            <li @click='selectArea'>
                <span>居住地</span>
                <div class="li-right">
                    <span>{{liveArea}}</span>
                    <i>&gt;</i>
                </div>
            </li>
            <li style="display:block;height:10px;background:#f1f1f1"></li>
            <li>
                <span>
                    个人签名
                </span>
                <div class="li-right">
                    <span></span>
                    <i>&gt;</i>
                </div>
            </li>
        </ul>
        <button class="signOut-btn">退出登录</button>
        <div class="select-area" v-if="showSelectArea">
            <header>
                <button @click="hiddenSelectArea">取消</button>
                <button @click="confirmArea">完成</button>
            </header>
            <v-distpicker class="area-picker" type="mobile" @selected="getArea"></v-distpicker>
        </div>
        <transition name="up">
            <div class="select-sex" v-show="showSelectSex" @click="hiddenSelectSex">
                <label for="secret">
                    <input type="radio" id="secret" name="sex" value="保密" v-model="sex"> 保密
                </label>
                <label for="man">
                    <input type="radio" id="man" name="sex" value="男" v-model="sex"> 男
                </label>
                <label for="woman">
                    <input type="radio" id="woman" name="sex" value="女" v-model="sex"> 女
                </label>
                <button @click="hiddenSelectSex">取消</button>
            </div>
        </transition>
        <input-modal :visible="visible" :title="modalTitle" :inputText.sync="inputText" @visible="visibles" @inputVal="inputVal"></input-modal>
        <div class="mask" v-show="maskShow"></div>
    </div>
</template>

<script>
import mList from '../../components/list.vue'
import inputModal from '../../components/input-modal/input-modal.vue'
// import inputModal from '../../components/input-modal/input-modal.js'
import VDistpicker from 'v-distpicker'
export default {
    data() {
        return {
            username: 'aaa',
            visible: false,
            modalTitle: '',
            inputText: '',
            sex: '保密',
            area: '北京市',
            liveArea: '',
            showSelectArea: false,
            showSelectSex: false,
            date: '',
            maskShow: false
        }
    },
    methods: {
        showModal(title) {
            this.visible = true;
            this.modalTitle = title;
            this.inputText = this.username
        },
        visibles(val) {
            this.visible = val;
        },
        inputVal(val) {
            this.username = val
        },
        selectSex() {
            this.showSelectSex = true;
            this.maskShow = true;
        },
        hiddenSelectSex() {
            this.showSelectSex = false;
            this.maskShow = false;
        },
        getArea(value) {
            this.area = value
        },
        selectArea(){
            this.maskShow=true;
            this.showSelectArea = true;
        },
        hiddenSelectArea(){
            this.maskShow=false;
            this.showSelectArea = false;
        },
        confirmArea() {
            if (this.area.province) {
                this.liveArea = this.area.province + " " + this.area.city + " " + this.area.area;
            }
            this.hiddenSelectArea();
        }
    },
    components: {
        mList,
        inputModal,
        VDistpicker
    }
}
</script>

<style lang="scss" scoped>
.sets-list {
    li {
        height: 50px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        &.cant {
            background: #fcfcfc;
            &:active {
                background: #fcfcfc;
            }
        }
        &:active {
            background: #f1f1f1;
        }
        .li-right {
            margin-right: 10px;
        }
        span {
            margin-left: 10px;
        }
        i {
            margin-left: 10px;
            vertical-align: top;
        }
        &.user-avatar {
            height: 60px;
            align-items: center;
            span {
                margin-left: 10px;
            }
            div {
                height: 60px;
                line-height: 60px;
                margin-right: 10px;
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
    }
}
.signOut-btn{
    width: 80%;
    height: 36px;
    color: #fff;
    border-color: #f60;
    background: #f60;
    display: block;
    margin:26px auto;
    &:active{
        box-shadow: 0 0 2px 2px #ccc;
        background: #f64;
    }
}
.select-sex {
    position: absolute;
    z-index: 102;
    bottom: 20px;
    left: 50%;
    width: 60%;
    margin-left: -30%;

    label {
        background: #fff;
        display: block;
        width: 100%;
        height: 46px;
        line-height: 46px;
        text-align: center;
        border-bottom: 1px solid rgba(7, 17, 27, .1);
        input {
            display: none;
        }
    }
    button {
        margin-top: 10px;
        width: 100%;
        height: 40px;
        border: 0;
        border-radius: 0;
    }
}
.select-area{
    position: absolute;
    z-index: 102;
    bottom:0;
    width: 100%;
    header{
        width: 100%;
        height: 36px;
        background: #fff;
        border-bottom: 1px solid rgba(7, 17, 27, .1);
        display: flex;
        justify-content: space-between;
        button{
            height: 36px;
            line-height: 36px;
            border: 0;
            color: #387eca;
        }
    }
    .area-picker{
        height: 260px;
        overflow: auto;
    }
}
.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: rgba(7, 17, 27, .5);
}
</style>
