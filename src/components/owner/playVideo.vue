<template>
    <div>
        <video-header>
            <span slot="title">PHP是世界上最牛的语言，没有之一。</span>
        </video-header>
        <video-player   class="video-player-box" 
                        ref="videoPlayer" 
                        :playsinline="true" 
                        :options="playerOptions"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
        >
        </video-player>
        <!-- 页面内容 -->
        <div class="video">
            <h3>Spyder网袜蓝，让你上头的好“色”之图</h3>
            <strong>播放量：123456次播放</strong>
            <p>英国是汽车工程的基地，那里的工程技术公司向全球的汽车产业提供技术支持。他们在底盘技术上颇有心得。这或许跟英国的地理条件有关既有欧洲丘陵地带的蜿蜒，又有类似中国路况的颠簸，从而能够让人认识到融合妥协的重要性。捷豹是运动的也是优雅的，无论快慢，都要让它的主人从容不迫，这就要看底盘的功力了。</p>
            <div class="icon">
                <a href="javascript:;" class="fabulous" :class="{active:fabulousActive}" @click="praise"></a>
                <a href="javascript:;" class="collection" :class="{active:collectionActive}" @click="storeUp"></a>
            </div>
        </div>
        <!-- 选集 -->
        <div class="anthology">
            <h3>选集</h3>
            <div class="film">
                <ul :style="anthologyWidth">
                    <li v-for="list in anthologyData">
                        <img :src="list.img" alt="">
                        <p>{{list.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import videoHeader from './videoHeader.vue'
    import { videoPlayer } from 'vue-video-player'
    import 'video.js/dist/video-js.css'
    import 'vue-video-player/src/custom-theme.css'

    // 测试图片渲染
    import ceshiimg from '../../assets/images/video1.png'
    export default {
        data () {
            return {
                playerOptions : {
                    // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://vjs.zencdn.net/v/oceans.mp4" //url地址
                    }],
                    poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-6.jpg", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    // controlBar: {
                    //     timeDivider: true,
                    //     durationDisplay: true,
                    //     remainingTimeDisplay: false,
                    //     fullscreenToggle: true  //全屏按钮
                    // }
                },
                anthologyData:[
                    {
                        img:ceshiimg,
                        content:"王者荣耀钻石段 位开什么车"
                    },
                    {
                        img:ceshiimg,
                        content:"王者荣耀钻石段 位开什么车"
                    },
                    {
                        img:ceshiimg,
                        content:"王者荣耀钻石段 位开什么车"
                    },
                    {
                        img:ceshiimg,
                        content:"王者荣耀钻石段 位开什么车"
                    }
                ],
                anthologyWidth:{
                    width:""
                },
                fabulousActive:false,
                collectionActive:false
            }
        },
        methods: {
            onPlayerPlay(player) {
                // alert("play");
            },
            onPlayerPause(player){
                // alert("pause");
            },
            praise(){
                this.fabulousActive = !this.fabulousActive;
            },
            storeUp(){
                this.collectionActive = !this.collectionActive;
            }

        },
        mounted () {
            // this.$nextTick(function(){
                this.anthologyWidth.width = this.anthologyData.length * 2.3 + 'rem';
            // })
        },
        computed:{
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        components: {
            videoPlayer,
            videoHeader
        }
    }
</script>

<style scoped>
    .video {
        background: #fff;
        padding: 0 0.22rem;
    }
    .video h3{
        font-size: 0.28rem;
        color: #333;
        padding-top: 0.25rem;
    }
    .video strong{
        display: block;
        font-size: 0.24rem;
        color: #73757a;
        margin-top: 0.15rem;
    }
    .video p{
        font-size: 0.24rem;
        color: #73757a;
        margin-top: 0.35rem;
        text-indent: 1em;
        line-height: 18px;;
    }
    .video .icon{
        text-align: right;
        border-bottom: 1px solid #e5e5e5;
    }
    .video .icon a{
        display: inline-block;
    }
    .video .fabulous{
        width: 0.34rem;
        height: 0.38rem;
        background: url(../../assets/images/fabulousicon.png) no-repeat center;
        background-size: cover;
        margin-right: 0.3rem;
    }
    .video .fabulous.active{
        background: url(../../assets/images/fabulousiconAc.png) no-repeat center;
        background-size: cover;
    }
    .video .collection{
        width: 0.4rem;
        height: 0.38rem;
        background: url(../../assets/images/collectionicon.png) no-repeat center;
        background-size: cover;
        margin-right: 0.2rem;
    }
    .video .collection.active{
        background: url(../../assets/images/collectioniconAc.png) no-repeat center;
        background-size: cover;
    }
    .anthology{
        background: #fff;
        padding: 0.3rem 0.22rem 0; 
        overflow: hidden;
    }
    .anthology ul{
        overflow-y: hidden;
    }
    .anthology h3{
        font-size: 0.28rem;
        color: #333333;
    }
    .anthology .film::before{
        content: "";
        display: block;
        clear: both;
        height: 0;
    }
    .anthology .film::after{
        content: "";
        display: block;
        clear: both;
        height: 0;
    }
    .anthology .film{
        margin-top: 0.3rem;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 0.3rem;
        overflow-x: auto;
        width: 100%;
    }
    .anthology .film ul{
        overflow-y: hidden;
    }
    .anthology li{
        width: 2.2rem;
        float: left;
        margin-right: 0.1rem;
    }
    .anthology li img{
        display: block;
        width: 2.2rem;
        height: 1.2rem;
    }
    .anthology li p{
        font-size: 0.28rem;
        color: #333333;
        margin-top: 0.15rem;
    }
</style>
