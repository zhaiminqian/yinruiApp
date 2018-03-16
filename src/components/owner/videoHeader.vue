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
        height: 0.55rem;
        padding: 0 0.22rem;
        line-height: 0.55rem;
        color: #333;
        font-size: 0.36rem;
        position: absolute;
        width: 7.5rem;
        z-index: 99;
    }
    .title-top span{
        font-size: 0.26rem;
        color: #ffffff;
        margin-left: 0.5rem;
    }
    .title-top a.go{
        width: 1rem;
        height: 100%;
        display: block;
        background: url(../../assets/images/jt2_w.png) no-repeat left center;
        background-size: 0.2rem 0.36rem;
        position: absolute;
        left: 0.22rem;
    }
    
</style>