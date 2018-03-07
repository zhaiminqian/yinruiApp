<template>
    <div>
        <!-- 搜索框 -->
        <search></search>
        <!-- swiper -->
        <swiper></swiper>
        <!-- 公共标题 -->
        <public-title :link='links.say'>
            <span slot="title">
                车主有话说
            </span>
        </public-title>
        <!-- 列表 -->
        <list :list='sayList' :detailLinks='detailLink'></list>

        <!-- 公共标题 -->
        <public-title :link='links.video'>
            <span slot="title"> 
                车主小视频
            </span>
        </public-title>
        <!-- 列表 -->
        <list :list='videoList' :detailLinks='detailLink2'></list>

        <!-- 公共标题 -->
        <public-title :link='links.video'>
            <span slot="title"> 
                汽车资讯
            </span>
        </public-title>
        <!-- 列表 -->
        <list2 :zxlist='zxList' :zxdetailLinks='zxdetailLink'></list2>

        <!-- 公共标题 -->
        <public-title :link='links.csLink'>
            <span slot="title"> 
                热门厂商
            </span>
        </public-title>
        <!-- 列表 -->
        <csList :cslists='csList' ></csList>
    </div>
</template>
<script>
import axios from 'axios'
import search from '@/components/index/search.vue'
import swiper from '@/components/index/swiper.vue'
import publicTitle from '@/components/index/publicTitle.vue'
import list from '@/components/index/list.vue'
import list2 from '@/components/index/list2.vue'
import csList from '@/components/index/csList.vue'
export default {
    name:'index',
    data(){
        return {

            //公共标题的跳转链接
            links:{
                'say':'/login',
                'video':'/login',
                'zx':'/login',
                'csLink':'/login'
            },

            //车主有话说列表详情页链接
            detailLink:'/login',
            //车主小视频详情页链接
            detailLink2:'/login',
            //汽车资讯详情页链接
            zxdetailLink:'/login',

            //车主有话说列表
            sayList:[],
            //车主小视频列表
            videoList:[],
            //汽车资讯列表
            zxList:[],
            //厂商列表
            csList:[],
        }
    },
    components:{
        search,
        swiper,
        publicTitle,
        list,
        list2,
        csList
    },
    mounted(){
        // 车主有话说列表
        axios.get('/static/json/sayList.json')
        .then((response)=>{
            // console.log(response.data.sayList);
            this.sayList = response.data.sayList;
        })
        .catch((error)=>{
            console.log(error);
        });
        //车主小视频列表
        axios.get('/static/json/videoList.json')
        .then((response)=>{
            // console.log(response.data.videoList);
            this.videoList = response.data.videoList;
        })
        .catch((error)=>{
            console.log(error);
        });
        //汽车资讯列表
        axios.get('/static/json/zxList.json')
        .then((response)=>{
            // console.log(response.data.zxList);
            this.zxList = response.data.zxList;
        })
        .catch((error)=>{
            console.log(error);
        });
        //厂商列表
        axios.get('/static/json/csList.json')
        .then((response)=>{
            console.log(response.data.csList);
            this.csList = response.data.csList;
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}
</script>
<style scoped>

</style>
