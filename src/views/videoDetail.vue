<template>
    <div>
        <public-detail :listcontent='listsb'></public-detail>
        <!-- 选集 -->
        
    </div>
</template>
<script>
import axios from 'axios';
import publicDetail from '@/components/detail/publicDetail.vue'
export default {
    data(){
        return {
            listsb:{},    //当前数据的相关内容
            videoList:[]  //所有数据
        }
        
    },
    methods: {
        //获取到传过来的query值
        link(){
            // console.log(this.$route.query.id);
            let id = this.$route.query.id; //传过来的id
            axios.get('/static/json/videoList.json')
            .then((response)=>{
                console.log(response);
                // this.videoList = response.data.videoList;
                let arr = [] ;
                let data = response.data.videoList;
                data.forEach((item,index) => {
                    console.log(item.id);
                    if( item.id == id ){
                        this.listsb = item ;
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
    },
    components:{
        publicDetail
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

</style>


