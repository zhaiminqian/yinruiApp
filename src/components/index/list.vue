<template>
  <div> 
        <div class="car-list">
            <ul class="clearfix">
                <li v-for="(item,index) in list" :key="index" @click="linkTo(item.id)">
                  <img :src="item.img" alt="图片">
                  <div class="text">
                      <h3>{{item.title}}</h3>
                      <p>{{item.describe}}</p>
                  </div>
                </li>
            </ul>
        </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array,        //列表内容
    detailLinks: String //列表详情页链接
  },
  methods:{
    linkTo(id){
        
        this.$router.push({
          path:'sayDetail',
          query:{
            id:id
          }
        })
    }
  }
};
</script>
<style scoped>
.car-list{
    padding: 0 0.22rem;
}
.car-list ul {
  border-bottom: 1px solid #e5e5e5;
}
.car-list li {
  width: 3.47rem;
  height: 3rem;
  display: inline-block;
  float: left;
  margin-bottom: 0.1rem;
}
.car-list li img {
  display: block;
  width: 100%;
  height: 1.96rem;
}
.car-list li .text {
  margin: 0.12rem 0;
}
.car-list li .text h3 {
  font-size: 0.28rem;
  color: #333;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.car-list li .text p {
  font-size: 0.24rem;
  color: #73757a;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.car-list li:nth-child(2n) {
  float: right;
}
</style>


