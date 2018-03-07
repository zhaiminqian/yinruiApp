<template>
    <div class="wrapper">
        <!-- search start -->
        <div class="search">
            <input type="text" placeholder="极品飞车" @focus="focusActive" :class="{active:isActive}">
        </div>
        <!-- search end -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive:false,
        }
    },
    methods:{
        focusActive(){
            this.isActive = true;
        }
    }
};
</script>
<style scoped >
/*search*/

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
</style>
