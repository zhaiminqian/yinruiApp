<template>
  <div>
      <LoginHeader>
          <span slot="title">汽车资讯</span>
      </LoginHeader>

      <list2 :zxlist='zxlist0' :zxdetailLinks='zxdetailLinks0' class="list"></list2>

  </div>
</template>
<script>
// axios
import axios from 'axios'
import LoginHeader from '@/components/login/LoginHeader.vue'
import list2 from '@/components/index/list2.vue'


export default {
    data(){
        return{
            zxlist0:[],
            zxdetailLinks0:'/login'
        }
    },
    mounted(){
        axios.get('/static/json/zxList.json')
        .then((response)=>{
            console.log(response.data.zxList);
            this.zxlist0 = response.data.zxList;
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    components:{
        LoginHeader,
        list2
    }
}
</script>
<style scoped>
    .list{
        margin-top: 0.2rem;
    }
</style>

