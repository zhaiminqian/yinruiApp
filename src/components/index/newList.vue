<template>
  	<div> 
		<div class="public-title">
            <router-link :to="titleLink" tag="h2">
				<slot name="title"></slot>
				<i></i>
			</router-link>
        </div>
        <div class="car-list">
            <ul class="clearfix ">
                <li v-for="(item,index) in theOwnerContentList" :key="index" @click="linkTo(item.id)">
					<div class="img-content play">
						<img :src="item.img" alt="图片">
					</div>
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
	props:['the-owner-content-list','title-link'],
	data () {
		return {
			
		}
	},
	methods:{
		
		linkTo(id){
			
			// this.$router.push({
			// 	path:'sayDetail',
			// 	query:{
			// 		id:id
			// 	}
			// })
		}
	},
	mounted () {
	}
};
</script>
<style scoped>
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
	.car-list{
		padding: 0 0.22rem;
	}
	.car-list ul {
		border-bottom: 1px solid #e5e5e5;
	}
	.car-list li {
		float: left;		
		width: 3.47rem;
		height: 3rem;
		display: inline-block;
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
	.play{
		position: relative;
	}
	.play::after, .play::before{
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
		cursor: pointer;
	}
	.play::before{
		z-index: 5;
		border: .1rem solid transparent;
		border-left-color: rgba(255, 255, 255, 0.68);
		border-radius: .03rem;
		margin-left: .07rem;
	}
	.play::after{
		width: .48rem;
		height: .48rem;
		border: 2px solid rgba(255, 255, 255, 0.68);
		border-radius: 100%;
		background: rgba(0, 0, 0, 0.68);
	}
</style>


