<template>
    <div>
        <ul>
            <li class="border-1px dlist">
                <div>
                    <p class="back-font-12">username1z</p>
                    <p class="gray-font-12">2017.05.15 19:15:09</p>
                </div>
                <span class="add">+0.06</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dlist {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0; // margin: 0 5px;
    div {
        margin-left: 8px;
    }
    &>span {
        margin-right: 8px;
    }
}
</style>
