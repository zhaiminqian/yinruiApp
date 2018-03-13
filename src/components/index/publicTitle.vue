<template>
  <div> 
        <div class="public-title">
            <slot name="title"></slot>
            <router-link :to='link'></router-link>
        </div>
  </div>
</template>
<script>
export default {
    props:{
        link:String
    }
}
</script>
<style scoped>
    .public-title {
        padding: 0 0.22rem;
        width: 100%;
        height: 1.02rem;
        line-height: 1.02rem;
        font-size: 0.36rem;
        color: #333333;
    }
    .public-title a {
        display: inline-block;
        float: right;
        width: 1rem;
        height: 100%;
        background: url(/static/images/jt.png) no-repeat right center;
        background-size: 0.14rem 0.24rem;
    }
</style>


