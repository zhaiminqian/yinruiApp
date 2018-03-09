<template>
  <div> 
        <div class="meaasge-list">
            <ul>
                <li class="clearfix" v-for="(item,index) in zxlist" :key="index" @click="linkTo(item.id)">
                    <div class="img">
                        <img :src="item.img" alt="图片">
                    </div>
                    <div class="text">
                        <h3>
                          {{item.title}}
                        </h3>
                        <p>
                            <span class="date">{{item.date}}</span>
                        </p>
                    </div>
                </li>  
            </ul>
        </div>
  </div>
</template>
<script>
export default {
  props: {
    zxlist: Array,        //列表内容
    zxdetailLinks: String //列表详情页链接
  },
  methods:{
    linkTo(id){
      this.$router.push({
        path:this.zxdetailLinks,
        query:{
          id:id
        }
      })
    }
  }
};
</script>
<style scoped>
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
</style>


