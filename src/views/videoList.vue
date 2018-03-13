<template>
  <div>
      <LoginHeader>
          <span slot="title">车主小视频</span>
      </LoginHeader>
      <!-- 分类 -->
      <div class="list-box" id='cars-list'>
            <div class="classify">
                <ul class="clearfix">
                    <li v-for="(item,index0) in classify" :key="index0">
                        <span class="class-fy">按{{item.type}}：</span>
                        <div class="spa-box">
                            <div class="clearfix" >
                                <span v-for="(detail,index) in item.details" 
                                      :key="index" 
                                      @click="selectClassify(index0,index,$event)" 
                                      ref="aaa"
                                >
                                      {{detail}}
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
       </div>

       <list :list='videoList' :detailLinks='detailLink' class="list"></list>

  </div>
</template>
<script>
// axios
import axios from "axios";
import LoginHeader from "@/components/login/LoginHeader.vue";
import list from "@/components/index/list.vue";

export default {
  data() {
    return {
      videoList: [],
      classify:[],          //分类数据
      detailLink: "/login",
      lengths:[],           //分类的细节个数
      allWidth_:[],          //总长度
      num:0
    };
  },
  mounted() {
    axios
      .get("/static/json/videoList.json")
      .then(response => {
        // console.log(response.data.videoList);
        // console.log(response.data.classify);
        this.videoList = response.data.videoList;

        //分类数据
        this.classify = response.data.classify;
        let all = this.classify;

        // console.log(classify);
        all.forEach((item) => {
            // console.log(item.details.length); //6 3 2
            this.lengths.push(item.details.length);
        });
        // console.log(this.lengths);

      })
      .catch(error => {
        console.log(error);
      });  
  },
  methods:{
      //点击分类
      selectClassify(index0,index,event){
  
        // console.log(event);
        // console.log(event.currentTarget.innerText);
        // console.log(this.$refs.aaa);

        // console.log(this.$refs.aaa.innerText);
        let clickHtml = event.currentTarget.innerText; //点击的内容
        let allHtml = this.$refs.aaa;                  //所有的内容
        // console.log(this.$refs.aaa)
        // allHtml.forEach((item)=>{
        //     console.log(item.innerText);
        //     console.log(clickHtml);
        //     if( item.innerText == clickHtml ){
        //         console.log(132);
        //         item.style.color='#f6b900';
        //         item.style.borderColor='#f6b900';
        //         item.style.borderRadius='0.28rem';
        //     }else{
        //         item.style.color='#73757a';
        //         item.style.borderColor='transparent';
        //         item.style.borderRadius='0.28rem';
        //     }
        // })


        console.log(index0,index);
        
      }
  },
  components: {
    LoginHeader,
    list
  }
};
</script>
<style scoped>
.list {
  margin-top: 0.2rem;
}
.list-box {
  padding: 0.2rem 0.22rem;
  margin-bottom: 0.2rem;
}
.list-box ul {
  border: none;
}
.title-top {
  background: #f9f9f9;
  height: 0.88rem;
  border-bottom: 1px solid #cacaca;
  padding: 0 0.22rem;
  line-height: 0.88rem;
  color: #333;
  font-size: 0.36rem;
  text-align: center;
  position: fixed;
  width: 7.5rem;
  z-index: 10;
}
.title-top a {
  width: 1rem;
  height: 100%;
  display: block;
  background: url(/static/images/jt2.png) no-repeat left center;
  background-size: 0.2rem 0.36rem;
  position: absolute;
  left: 0.22rem;
}
.title-top button {
  width: 1rem;
  height: 0.46rem;
  line-height: 0.46rem;
  background: #f6b900;
  font-size: 0.24rem;
  color: #fff;
  border-radius: 3px;
  float: right;
  padding: 0;
  margin-top: 0.21rem;
  position: absolute;
  right: 0.22rem;
}
.classify {
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.28rem;
  margin-bottom: 0.35rem;
}
.classify ul {
  padding: 0.1rem 0 0;
}
.classify ul li {
  height: 0.58rem;
  line-height: 0.58rem;
  margin-bottom: 0.28rem;
}
.classify ul li .class-fy {
  float: left;
}
.classify ul li .spa-box {
  float: left;
  width: 5.5rem;
  overflow: hidden;
  height: 0.58rem;
  overflow-x: scroll;
}
.classify ul li .spa-box div{
    width: 10rem;
}
.classify ul li .spa-box div span {
  padding: 0.06rem 0.2rem;
  color: #73757a;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 2px solid transparent;
}
.classify ul li .spa-box div span.active {
  border-color: #f6b900;
  color: #f6b900;
  border-radius: 0.28rem;
}
</style>

