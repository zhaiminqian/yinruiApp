<template>
  <div> 
       <div class="cs-list">
            <ul :style="{width:allWidth()}">
                <li v-for="(item,index) in cslists" :key="index">
                    <div>
                        <a href="javascript:;">
                            <img :src="item.img" alt="图片">
                        </a>
                    </div>
                    <p>{{item.name}}</p>
                    <button @click="careBtn(index,$event)" :class="{active:item.care}">{{text}}</button>
                </li>
            </ul>
        </div> 
  </div>
</template>
<script>
export default {
    data(){
        return {
            text:'关注',
        }
    },
    props: {
        cslists: Array,        //列表内容
    },
    mounted(){
    },
    methods:{
        allWidth(){
            return this.cslists.length * 2.26 +'rem';
        },
        //点击关注
        careBtn(index,event){
            this.cslists[index].care = ! this.cslists[index].care;
            //获取当前点击的元素
            console.log(event.currentTarget.innerHTML);
            let text = event.currentTarget.innerHTML;
            if( text == '关注'){
                // console.log(1)
                event.currentTarget.innerHTML = '已关注'
            }else{
                event.currentTarget.innerHTML = '关注'
            }
        },
        
    }
};
</script>
<style scoped>
.cs-list {
  width: 100%;
  font-size: 0.24rem;
  color: #333;
  overflow: auto;
  margin-bottom: 0.8rem;
}
.cs-list ul {
  /* width: 10000000%; */
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
</style>


