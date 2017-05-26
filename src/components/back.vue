<template>
    <div class="back orange-font-14" @click="goback(url)">
        {{back}}
        <i v-if="!back">&lt;</i>
    </div>
</template>
<script>
    export default {
        props: {
            back: {
                type: String,
                default: ''
            },
            url: {
                type: String
            }
        },
        methods: {
            goback(url) {
                if (url) {
                    this.$router.push({
                        path: url
                    });
                } else {
                    this.$router.go(-1);
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .back {
        position: absolute;
        left: 0px;
        top: 0px;
        padding: 15px 20px 15px 15px;
    }
</style>


