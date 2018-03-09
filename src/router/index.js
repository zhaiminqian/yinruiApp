import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import ForgetPass from '@/components/login/ForgetPass'
import modifyPass from '@/components/login/modifyPass'
import register from '@/components/login/register.vue'
import index from '@/views/index.vue'
import sayList from '@/views/sayList.vue'
import zxList from '@/views/zxList.vue'
import videoList from '@/views/videoList.vue'
import sayDetail from '@/views/sayDetail.vue'
import videoDetail from '@/views/videoDetail.vue'
import zxDetail from '@/views/zxDetail.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/ForgetPass',
			name: 'ForgetPass',
			component: ForgetPass
		},
		{
			path: '/modifyPass',
			name: 'modifyPass',
			component :modifyPass
			
		},
		{
			path: '/register',
			component: register
		},
		{
			path: '/sayList',
			component: sayList
		},
		{
			path: '/zxList',
			component: zxList
		},
		{
			path: '/videoList',
			component:videoList
		},
		{
			path: '/sayDetail',
			component:sayDetail
		},
		{
			path: '/videoDetail',
			component:videoDetail
		},
		{
			path: '/zxDetail',
			component:zxDetail
		}
	]
})
