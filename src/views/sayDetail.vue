<template>
    <div>
        <!-- 视频播放器 -->
        <div class="playvideo">
            <a href="javascript:;" class="go" @click="ReturnGo"></a>
            <div class="zy_media">
                <video :src="list.video" autoplay='true' id="videoplay" controls='true'>
                    您的浏览器不支持HTML5视频
                </video>
            </div>
            
        </div>

        <!-- 页面内容 -->
        <div class="video">
            <h3>{{list.title}}</h3>
            <strong>播放量：{{list.playTime}} 次播放</strong>
            <p>{{list.describe}}</p>
            <div class="icon">
                <a href="javascript:;" class="fabulous"></a>
                <a href="javascript:;" class="collection"></a>
            </div>
        </div>
        <!-- 选集 -->
        <div class="anthology">
            <h3>选集</h3>
            <div class="film">
                <ul>
                    <li v-for="(item,index) in sayList" :key="index">
                        <img :src="item.img" :alt="item.title">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            list:{},    //当前数据的相关内容
            sayList:[]  //所有数据
        }
        
    },
    methods: {
        ReturnGo() {
            this.$router.go(-1);
        },
        //获取到传过来的query值
        link(){
            // console.log(this.$route.query.id);
            let id = this.$route.query.id; //传过来的id
            axios.get('/static/json/sayList.json')
            .then((response)=>{
                console.log(response);
                // this.sayList = response.data.sayList;
                let arr = [] ;
                let data = response.data.sayList;
                data.forEach((item,index) => {
                    console.log(item.id);
                    if( item.id == id ){
                        this.list = item ;
                    }
                    if( index < 5 ){
                        arr.push(item);
                        this.sayList = arr;
                    }
                });
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted(){
        this.link()
    }
};
</script>
<style scoped>
.playvideo .go {
  display: block;
  background: url(/static/images/jt2_w.png) no-repeat center;
  background-size: cover;
  width: 0.2rem;
  height: 0.36rem;
  position: absolute;
  z-index: 99;
  top: 0.18rem;
  left: 0.22rem;
}
.zy_media {
  height: 4.2rem;
}
.zy_media video {
  width: 100%;
  height: 100%;
}
.zy_timeline_current {
  background: #f6b900;
}
.zy_playpause_btn {
  margin-right: 15px;
}
.zy_timeline_handle {
  background: #fff;
}
.zy_pause::before,
.zy_pause::after {
  background: #f6b900;
}
.zy_play::before {
  border-color: transparent transparent transparent #f6b900;
}

.playvideo .go {
  display: block;
  background: url(/static/images/jt2_w.png) no-repeat center;
  background-size: cover;
  width: 0.2rem;
  height: 0.36rem;
  position: absolute;
  z-index: 99;
  top: 0.18rem;
  left: 0.22rem;
}
.zy_title {
  padding-left: 0.6rem;
  font-size: 0.28rem;
}
/* 视频页面 内容 */
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
    margin-top: 0.2rem;
    text-indent: 1em;
    line-height: 24px;;
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
    background: url(/static/images/fabulousicon.png) no-repeat center;
    background-size: cover;
    margin-right: 0.3rem;
}
.video .fabulous.active{
    background: url(/static/images/fabulousiconAc.png) no-repeat center;
    background-size: cover;
}
.video .collection{
    width: 0.4rem;
    height: 0.38rem;
    background: url(/static/images/collectionicon.png) no-repeat center;
    background-size: cover;
    margin-right: 0.2rem;
}
.video .collection.active{
    background: url(/static/images/collectioniconAc.png) no-repeat center;
    background-size: cover;
}
.anthology{
    background: #fff;
    padding: 0.3rem 0.22rem 0; 
    overflow: hidden;
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
    padding-bottom: 0.1rem;
    overflow-x: auto;
    width: 100%;
}
.anthology .film ul{
    overflow-y: hidden;
    width: 11.5rem;
    height: 1.8rem;
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
    font-size: 0.24rem;
    height: 0.5rem;
    color: #333333;
    margin-top: 0.15rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>


