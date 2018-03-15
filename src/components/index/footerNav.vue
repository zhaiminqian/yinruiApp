<template>
    <div class="footer">
        <ul>
            <li class="home active">
                <a href="index.html">
                    <span>首页</span>
                </a>
            </li>
            <li class="message">
                <a href="javascript:;">
                    <span>消息</span>
                    <i>53</i>
                </a>
            </li>
            <li class="center">
                <span class="add"></span>
            </li>
            <li class="qa">
                <a href="javascript:;">
                    <span>问答</span>
                </a>
            </li>
            <li class="my">
                <a href="javascript:;">
                    <span>我的</span>
                </a>
            </li>
        </ul>
        <div class="upfile">
            <a href="" class="up-video">
                上传视频
            </a>
            <a href="" class="up-article">
                上传文章
            </a>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: .98rem;
        padding: 0 .22rem;
        background: #f9f9f9;
        border-top: 1px solid #cacaca;
    }
    .footer ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    .footer ul li{
        position: relative;
        width: .6rem;
        padding-top: .63rem;
        font-size: .2rem;
        text-align: center;
        
    }
    .footer ul li a{
        color: #666;
    }
    .footer ul li.active a{
        color: #f6b900;
    }
    .footer ul a{
        display: block;
    }
    .footer .home{
        background: url(../../assets/images/home.png) center 0.11rem/0.51rem 0.38rem no-repeat;
    }
    .footer .home.active{
        background-image: url(../../assets/images/home-active.png);
    }
    .footer .message{
        background: url(../../assets/images/message.png) center 0.11rem/0.46rem 0.34rem no-repeat;
    }
    .footer .message.active{
        background-image:url(../../assets/images/message-active.png);
    }
    .footer .center{
        width: 0.86rem;
        height: 0.74rem;
        background: #f6b900;
        border-radius: .05rem;
        transition: all .3s ease;
    }
    .footer .center.active{
        background: transparent;
    }
    .footer .center.active .add{
        transform: translate(-50%, -50%) rotate(0);
        background-image: url(../../assets/images/close.png);
    }
    .footer .center .add{
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: center center;
        transform: translate(-50%, -50%) rotate(90deg);
        width: 0.42rem;
        height: 0.42rem;
        background: url(../../assets/images/add.png) center center/100% 100% no-repeat transparent;
        transition: all .3s ease;
    }
    .footer .qa{
        background: url(../../assets/images/qa.png) center 0.11rem/0.48rem 0.44rem no-repeat;
    }
    .footer .qa.active{
        background-image: url(../../assets/images/qa-active.png);
    }
    .footer .my{
        background: url(../../assets/images/myself.png) center 0.11rem/0.38rem 0.42rem no-repeat;
    }
    .footer .my.active{
        background-image: url(../../assets/images/myself-active.png);
    }
    .footer .upfile{
        position: absolute;
        bottom: .98rem;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        transition: all .3s ease;
    }
    .footer .upfile a{
        display: block;
        width: 1.46rem;
        padding-top: 1.64rem;
        font-size: .24rem;
        color: #fff;
        text-align: center;
    }
    .footer .upfile .up-video{
        background: url(../../assets/images/up-video.png) center top/1.46rem 1.46rem no-repeat;
    }
    .footer .upfile .up-article{
        background: url(../../assets/images/up-article.png) center top/1.46rem 1.46rem no-repeat;
    }
    .footer .message i{
        position: absolute;
        left: .4rem;
        top: .03rem;
        display: block;
        max-width: .6rem;
        height: .3rem;
        border-radius: .15rem;
        font-size: .2rem;
        line-height: .3rem;
        color: #fff;
        background: #ff0000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 .1rem;
    }
</style>
