<template>
    <div class="my">
        <login-header style="background:#f6b900;">
            <div slot="returnUp" style="display:none;"></div>
            <span slot="title" style="color:#fff">我的</span>
        </login-header>
        <div class="wrapper">
            <div class="my-info common-width">
                <div class="my-info-content">
                    <div class="my-logo">
                        <img :src="myObj.headPortrait" alt="">
                    </div>
                    <div class="my-des">
                        <h2>{{myObj.userName}}</h2>
                        <p>{{myObj.aSign}}</p>
                    </div>
                </div>
                <div class="my-info-works">
                    <div class="my-attention">
                        <h2>{{myObj.followNum}}</h2>
                        <p>粉丝</p>
                    </div>
                    <div class="my-work">
                        <h2>{{myObj.worksNum}}</h2>
                        <p>作品</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper" @click="setPageIndex1">
            <a href="javascript:;" class="common-width base-info link">
                <em>基本信息</em>
                <i class="btn-arrow-right"></i>
            </a>
        </div>
        <div class="wrapper">
            <a href="" class="common-width article-charge link">
                <em>文章管理</em>
                <i class="btn-arrow-right"></i>
            </a>
        </div>
        <div class="wrapper">
            <a href="" class="common-width video-charge link">
                <em>视频管理</em>
                <i class="btn-arrow-right"></i>
            </a>
        </div>
        <div class="wrapper">
            <a href="" class="common-width config link">
                <em>设置</em>
                <i class="btn-arrow-right"></i>
            </a>
        </div>
    </div>
</template>

<script>
    import LoginHeader from '@/components/login/LoginHeader.vue'

    import HeaderImg from '../../assets/images/cs2.png'
    export default {
        data () {
            return {
                myObj:{
                    userName:"杨小宝",
                    aSign:"如果不努力永远不知道自己有多废物",
                    headPortrait:HeaderImg,
                    followNum:"100",
                    worksNum:"250"
                }
            }
        },
        methods: {
            setPageIndex1(){
                this.$store.commit('changePageIndex',4);
                this.$router.push('/info');
            }
        },
        components: {
            LoginHeader
        }
    }
</script>

<style scoped>
    .my{
        background: #eeeeee;
        height: 100vh;
    }
    .wrapper {
        background: #fff;
    }
    .my-info {
        margin-bottom: .15rem;
        font-size: .36rem;
        color: #333;
    }
    .my-info h2 {
        margin-bottom: .2rem;
    }
    .my-info p {
        font-size: .24rem;
        color: #73757a;
    }
    .my-info-content {
        display: flex;
        padding: .22rem 0;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
    }
    .my-info-content .my-logo {
        width: 1.4rem;
        height: 1.4rem;
        margin-right: .2rem;
        border-radius: 100%;
        overflow: hidden;
    }
    .my-info-content .my-logo img {
        display: block;
        width: 1.4rem;
        height: 1.4rem;
    }
    .my-info-content .my-des h2, .my-info-content .my-des p {
        max-width: 5.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .my-info-works {
        padding: .22rem 0;
        display: flex;
        justify-content: space-around;
    }
    .my-info-works h2, .my-info-works p {
        text-align: center;
        max-width: 3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .link {
        display: flex;
        justify-content: space-between;
        padding-left: .9rem;
        margin-bottom: .15rem;
        line-height: 1rem;
        font-size: .28rem;
        color: #333;
        background: url(../../assets/images/base-info.png) 0.22rem center/0.48rem 0.48rem no-repeat;
    }
    .article-charge {
        margin-bottom: 1px;
        background-image: url(../../assets/images/article.png);
    }
    .video-charge {
        background-image: url(../../assets/images/video.png);
    }
    .config {
        background-image: url(../../assets/images/config.png);
    }
    .btn-arrow-right{
        display: block;
        width: 1rem;
        height: 1rem;
        background: url(../../assets/images/arrow-right-md.png) no-repeat right center/0.14rem 0.24rem;
    }
</style>
