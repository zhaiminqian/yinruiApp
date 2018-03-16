<template>
    <header class="title-top">
        <slot name='returnUp'><a href="javascript:;" class="go" @click="ReturnGo"></a></slot>
        <slot name='title'></slot>
        <slot name='ok'></slot>
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
    .title-top a.ok{
        position: absolute;
        right: 0.22rem;
        font-size: 0.24rem;
        color: #b5b5b5;
        border: 1px solid #e5e5e5;
        padding: 0.09rem 0.25rem;
        border-radius: 3px;
        line-height: initial;
        top: 0.18rem;
    }
    .title-top a.active{
        color: #fff;
        background: #f6b900;
        border: 1px solid #f6b900;
    }
</style>
