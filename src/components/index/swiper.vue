<template>
    <div class="wrapper">
        <mt-swipe :auto="4000" class="swiper-page">
            <mt-swipe-item v-for="(item,index) in banner" :key='index'>
                <img :src="item" alt="图片">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
    data(){
        return{
            banner:[
                '/static/images/banner.png',
                '/static/images/banner.png',
                '/static/images/banner.png',
            ]
        }
    },
    methods:{
        
    }
};
</script>
<style scoped >
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
</style>
