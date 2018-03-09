<template>
    <div>
        <h3>{{zx.title}}</h3>
        <p>{{zx.date}}</p>
        <div>
            {{zx.details}}
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            zx:{},    //当前数据的相关内容
        }
    },
    methods: {
        //获取到传过来的query值
        link(){
            // console.log(this.$route.query.id);
            let id = this.$route.query.id; //传过来的id
            axios.get('/static/json/zxList.json')
            .then((response)=>{
                console.log(response);
                // this.zxList = response.data.zxList;
                let arr = [] ;
                let data = response.data.zxList;
                data.forEach((item,index) => {
                    console.log(item.id);
                    if( item.id == id ){
                        this.zx = item ;
                    }
                });
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted(){
        this.link();
    }
};
</script>
<style scoped>

</style>


