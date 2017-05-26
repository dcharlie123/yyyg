<template>
    <div class="postlist-item">
        <header>
            <img class="postlist-item-img" src="../images/test1.jpg" alt="">
            <span class="gray-font-12">zzzz</span>
        </header>
        <main class="border-1px">
            <section class="image-area">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </section>
            <h6>5元中了苹果手机</h6>
            <p class="postlist-item-contentP">
                阿娇大厦的赛事的海边杀死的活塞的还是打打杀帝豪
            </p>
        </main>
        <footer class="footer">
            <span class="gray-font-12">time</span>
            <div class="postlist-item-icon">
                <i class="praise">+</i>
                <i class="comment">+</i>
                <i class="share">+</i>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.postlist-item {
    background: #fff;
    padding: 8px 0 0 8px;
    margin-bottom: 8px;
    header {
        .postlist-item-img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
        }
    }
    main {
        .image-area {
            // width: 100%;
            height: 60px;
            overflow-x: auto;
            img {
                max-width: 100px;
                max-height: 60px;
                border: 1px solid #ccc;
            }
        }
        h6 {
            font-size: 14px;
            margin: 8px 0;
        } //预览评论
        .postlist-item-contentP {
            font-size: 13px;
            color: #999;
            padding: 8px 0;
        }
    }
    .footer {
        height: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 8px;
    }
}
</style>

