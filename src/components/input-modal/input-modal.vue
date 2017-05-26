<template>
    <div class="input-modal" v-show='!isHidden'>
        <main>
            <p>{{title}}</p>
            <input type="text" :value="inputText" ref="input">
        </main>
        <footer>
            <button @click="confirm($event)">确认</button>
            <button @click="cancel($event)">取消</button>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHidden: true
        }
    },
    props: {
        title: {
            type: String
        },
        visible: {
            type: Boolean
        },
        inputText: {
            type: [String, Number]
        },
        inputType: {
            type: String
        }
    },
    watch: {
        visible(val) {
            if (val) {
                this.isHidden = false
            }
        }
    },
    methods: {
        confirm(ev) {
            this.isHidden = true;
            this.$emit('visible', false);
            this.$emit('inputVal', this.$refs.input.value);
        },
        cancel(){
            this.isHidden = true;
            this.$emit('visible', false);
        }
    }
}
</script>

<style lang="scss" scoped>
.input-modal {
    width: 60%;
    position: fixed;
    background: #fff;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border: 0;
    box-shadow: 0 0 6px 2px #ccc;
    border-radius: 3px;
    main {
        text-align: center;
        flex: 1 1 80%;
        min-height: 40px;
        padding: 20px;
        input {
            width: 90%;
            height: 30px;
            padding: 5px 5px 0 5px;
            border: 0;
            border-bottom: 1px solid rgba(7, 17, 27, .1);
            &:focus {
                border-bottom: 1px solid rgba(255, 111, 15, 0.5)
            }
        }
    }
    footer {
        flex: 0 1 20%;
        display: flex;
        justify-content: space-between;
        button {
            flex: 0 1 50%;
            height: 46px;
            border-radius: 0 0 3px 3px;
            border: 0;
            border-top: 1px solid rgba(7, 17, 27, .1);
            &:first-child {
                border-right: 1px solid rgba(7, 17, 27, .1);
                background: #ff6f0f;
                color: #fff;
            } // &:first-child::after{
            //     content: '';
            //     display: block;
            //     height: 100%;
            //     border-right: 1px solid rgba(7,17,27,0.5);
            // }
        }
    }
}
</style>
