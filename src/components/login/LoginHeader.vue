<template>
    <header class="title-top">
        <a href="javascript:;" class="go" @click="ReturnGo"></a>
        <slot name='title'></slot>
    </header>
</template>
<script>
    export default {
        methods: {
            ReturnGo(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .title-top{
        background: #f9f9f9;
        height: 0.88rem;
        border-bottom: 1px solid #cacaca;
        padding: 0 0.22rem;
        line-height: 0.88rem;
        color: #333;
        font-size: 0.36rem;
        text-align: center;
        position: fixed;
        width: 7.5rem;
        z-index: 99;
        position: relative;
    }
    .title-top a.go{
        width: 1rem;
        height: 100%;
        display: block;
        background: url(../../assets/images/jt2.png) no-repeat left center;
        background-size: 0.2rem 0.36rem;
        position: absolute;
        left: 0.22rem;
    }
</style>
