<template>
    <div>
        <!-- 首页 -->
        <keep-alive>
            <components :is="view"></components>
        </keep-alive>
        <footer-nav @mypage="mypage" @homepage="homepage"></footer-nav>
    </div>
</template>
<script>
    // 首页
    import homePage from '@/components/index/homePage'
    // my 我的页面
    import myPage from '@/components/my/myPage'
    // 底部导航公共部分
    import footerNav from '@/components/index/footerNav'
    export default {
        name:'index',
        data(){
            return {
                view:homePage
            }
        },
        methods: {
            // 初始化获取角色类型
            getRoleType(){
                this.$store.commit('getRoleType',1);
            },
            homepage(){
                this.view = homePage;
            },
            mypage(){
                this.view = myPage;
            },
            // 判断现在是那一个页面
            ifPage(){
                if(this.$store.state.pageIndex == 1){
                    this.view = homePage;
                }else if(this.$store.state.pageIndex == 4){
                    this.view = myPage;
                }
            }
        },
        components:{
            homePage,
            myPage,
            footerNav
        },
        mounted(){
            this.getRoleType();
            this.ifPage();

        }
    }
</script>
