<template>
    <div>
        <!-- search start -->
        <div class="wrapper">
            
            <div class="search">
                <input type="text" placeholder="极品飞车" @focus="focusScoped" @blur="blurScoped" :class="{active:scopedActive}">
            </div>
            
        </div>
        <!-- search end -->
        <div class="wrapper">
            <mt-swipe :auto="4000" class="swiper-page">
                <mt-swipe-item v-for="(item,index) in banner" :key='index'>
                    <img :src="item" alt="图片">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <new-list :theOwnerContentList = "theOwnerContentList" :titleLink = "theOwnerTitleLink">
            <span slot="title">
                车主有话说
            </span>
        </new-list>
        <new-list :theOwnerContentList = "theOwnerVideoList" :titleLink = "theOwnerVideoLink">
            <span slot="title">
                车主小视频
            </span>
        </new-list>
        <div class="meaasge-list">
            <div class="public-title">
                <router-link to="" tag="h2">
                    <span>汽车资讯</span>
                    <i></i>
                </router-link>
            </div>
            <ul>
                <li class="clearfix" v-for="(item,index) in carNews" :key="index">
                    <div class="img">
                        <router-link to=''>
                            <img :src="item.img" alt="图片">
                        </router-link>
                    </div>
                    <div class="text">
                        <h3>
                            <router-link to=''>
                                {{item.title}}
                            </router-link>
                        </h3>
                        <p>
                            <span class="date">{{item.date}}</span>
                        </p>
                    </div>
                </li>  
            </ul>
        </div>
        <div class="public-title">
            <router-link to="" tag="h2">
                <span>热门厂商</span>
                <i></i>
            </router-link>
        </div>
        <div class="cs-list">
            <ul :style="{width:hotWitdh()}">
                <li v-for="(item,index) in hotFirm" :key="index">
                    <div>
                        <a href="javascript:;">
                            <img :src="item.img" alt="图片">
                        </a>
                    </div>
                    <p>{{item.name}}</p>
                    <button @click="careBtn(index,item)" :class="{active:item.care}">{{item.text}}</button>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios'
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    import newList from '@/components/index/newList'
    export default {
        data () {
            return {
                // 搜索导航类
                scopedActive:false,  
                // 轮播
                banner:[
                    '/static/images/banner.png',
                    '/static/images/banner.png',
                    '/static/images/banner.png',
                ],
                
                theOwnerContentList:[],
                theOwnerVideoList:[],
                theOwnerTitleLink:'/sayList',
                theOwnerVideoLink:'/sayList',
                carNews:[],
                hotFirm:[],
            }
        },
        methods: {
            focusScoped(){
                this.scopedActive = !this.scopedActive;
            },
            blurScoped(){
                this.scopedActive = !this.scopedActive;
            },
            hotWitdh(){
                return this.hotFirm.length * 2.26 + 'rem';
            },
            careBtn(index,item){
                if(this.hotFirm[index].care){
                    this.hotFirm[index].care = !this.hotFirm[index].care;
                    this.hotFirm[index].text = "关注";
                }else{
                    this.hotFirm[index].care = !this.hotFirm[index].care;
                    this.hotFirm[index].text = "已关注";
                }
            },
            // 获取车主有话说列表
            getTheOwnerContent(){
                axios.get('/static/json/sayList.json')
                .then((response)=>{
                    let data = response.data;
                    if(data.status == 1){
                        this.theOwnerContentList = data.sayList;
                        this.theOwnerVideoList = data.video;
                    }else{
                        alert('请求数据失败');
                    }
                })
            },
            // 获取 汽车咨询
            getCarNews(){
                axios.get('/static/json/zxList.json')
                .then((response)=>{
                    let data = response.data;
                    if(data.status == 1){
                        this.carNews = data.zxList;
                    }
                })
                .catch((error)=>{
                    console.log(error);
                });
            },
            // 获取厂商列表
            getFirmList(){
                axios.get('/static/json/csList.json')
                .then((response)=>{
                    let data = response.data;
                    if(data.status == 1){
                        this.hotFirm = data.csList;
                    }else{
                        alert('数据请求失败');
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
            }

        },
        mounted () {
            this.getTheOwnerContent();
            this.getCarNews();
            this.getFirmList();
        },
        components:{
            newList
        }
    }
</script>

<style scoped>
    input{
        background: none;
        border: none;
    }
    .wrapper .search {
        padding: 0.12rem 0.22rem;
        height: 0.88rem;
        background: #f6b900;
    }
    .wrapper .search input {
        width: 100%;
        background: rgba(255, 255, 255, 0.4);
        height: 0.64rem;
        display: block;
        font-size: 0.28rem;
        color: #fff;
        line-height: 0.64rem;
        background-image: url(/static/images/search.png);
        background-size: 0.35rem 0.35rem;
        background-repeat: no-repeat;
        background-position: 0.8rem center;
        border-radius: 0.32rem;
        padding-right: 0.3rem;
        text-indent: 1.5rem;
        -webkit-transition: 0.3s all ease;
        transition: 0.3s all ease;
    }
    .wrapper .search input::-webkit-input-placeholder {
        color: #fff;
    }
    .wrapper .search input:-ms-input-placeholder {
        color: #fff;
    }
    .wrapper .search input:-moz-placeholder {
        color: #fff;
    }
    .wrapper .search input::-moz-placeholder {
        color: #fff;
    }
    .wrapper .search input.active {
        background-position: 0.2rem center;
        text-indent: 0.1rem;
        padding-left: 0.6rem;
    }
    .wrapper .swiper-page {
        width: 100%;
        height: 3.6rem;
    }
    .swiper-page .mint-swipe-item{
        width: 100%;
        height: 3.6rem;
    }
    .swiper-page .mint-swipe-indicators .mint-swipe-indicator {
        background: rgba(255, 255, 255, 0.4);
        width: 0.36rem;
        height: 0.06rem;
        border-radius: 0;
        opacity: 1;
    }
    .swiper-page .mint-swipe-indicators  .mint-swipe-indicator.is-active{
        background: #ffd500 !important;
    }
    .meaasge-list {
        overflow: hidden;
    }
    .meaasge-list ul {
        padding: 0.23rem 0 0.1rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .meaasge-list li {
        height: 1.36rem;
        width: 100%;
        margin-bottom: 0.48rem;
        overflow: hidden;
    }
    .meaasge-list li .img {
        width: 2.4rem;
        height: 1.36rem;
        float: left;
    }
    .meaasge-list li .ipt {
        float: left;
        margin-right: 0.6rem;
        display: none;
    }
    .meaasge-list li .ipt input {
        display: none;
    }
    .meaasge-list li .ipt input:checked + label {
        background: url(/static/images/checkbox0.png) no-repeat center center;
        border: none;
    }
    .meaasge-list li .ipt label {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 100%;
        border: 2px solid #e5e5e5;
        display: inline-block;
        background: #fff;
        margin: 0.1rem auto;
    }
    .meaasge-list li .text {
        float: right;
        width: 4.5rem;
    }
    .meaasge-list li .text h3 {
        font-size: 0.28rem;
        color: #333;
        line-height: 0.36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: box;
        display: -webkit-box;
            display: -moz-box;
                display: -ms-box;
                    display: -o-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
            -moz-line-clamp: 2;
                -ms-line-clamp: 2;
                    -o-line-clamp: 2;
        box-orient: vertical;
        -webkit-box-orient: vertical;
            -moz-box-orient: vertical;
                -ms-box-orient: vertical;
                    -o-box-orient: vertical;
        word-break: break-all;
        margin-bottom: 0.35rem;
    }
    .meaasge-list li .text h3 a{
        color: #333;
    }
    .meaasge-list li .text p {
        line-height: 0.24rem;
        color: #b5b5b5;
        font-size: 0.22rem;
    }
    .meaasge-list li .text p span {
        margin-right: 0.16rem;
    }
    .meaasge-list li.active .ipt {
        display: block;
    }
    .meaasge-list{
        padding: 0 0.22rem;
    }

    .cs-list {
        width: 100%;
        font-size: 0.24rem;
        color: #333;
        overflow: auto;
        margin-bottom: 1.8rem;
    }
    .cs-list ul {
        overflow-x: auto;
        overflow-y: hidden;
    }
    .cs-list ul li {
        margin-right: 0.66rem;
        width: 1.6rem;
        float: left;
    }
    .cs-list ul li div {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
    }
    .cs-list ul li p {
        text-align: center;
        line-height: 0.62rem;
        height: 0.62rem;
        overflow: hidden;
    }
    .cs-list ul li button {
        width: 1.6rem;
        height: 0.6rem;
        border: 2px solid #f6b900;
            -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 3px;
        font-size: 0.24rem;
        color: #f6b900;
        text-align: center;
        line-height: 0.6rem;
        padding: 0;
        float: left;
        background: transparent;
    }
    .cs-list ul li button.active {
        color: #e5e5e5;
        border-color: #e5e5e5;
    }
    .public-title {
        padding: 0 0.22rem;
        width: 100%;
        height: 1.02rem;
        line-height: 1.02rem;
        font-size: 0.36rem;
        color: #333333;
    }
    .public-title i {
        display: inline-block;
        float: right;
        width: 1rem;
        height: 1.02rem;
        background: url(../../assets/images/jt.png) no-repeat right center;
        background-size: 0.14rem 0.24rem;
    }
</style>
