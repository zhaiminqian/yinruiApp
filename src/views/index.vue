<template>
    <div>
        <!-- 首页 -->
        <home-page></home-page>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
    // 首页
    import homePage from '@/components/index/homePage'
    // 底部导航公共部分
    import footerNav from '@/components/index/footerNav'
    export default {
        name:'index',
        data(){
            return {
            }
        },
        components:{
            homePage,
            footerNav
        },
        mounted(){
            
        }
    }
</script>
