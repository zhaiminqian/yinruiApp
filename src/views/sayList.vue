<template>
  <div>
      <LoginHeader>
          <span slot="title">车主有话说</span>
      </LoginHeader>

      <list :list='sayList0' :detailLinks='detailLink' class="list"></list>

  </div>
</template>
<script>
// axios
import axios from 'axios'
import LoginHeader from '@/components/login/LoginHeader.vue'
import list from '@/components/index/list.vue'


export default {
    data(){
        return{
            sayList0:[],
            detailLink:'/login'
        }
    },
    mounted(){
        axios.get('/static/json/sayList.json')
        .then((response)=>{
            console.log(response.data.sayList);
            this.sayList0 = response.data.sayList;

        })
        .catch((error)=>{
            console.log(error)
        })
    },
    components:{
        LoginHeader,
        list
    }
}
</script>
<style scoped>
    .list{
        margin-top: 0.2rem;
    }
</style>

