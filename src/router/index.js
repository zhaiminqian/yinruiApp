import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/login'
import roleSelection from '@/components/login/roleSelection'

import ForgetPass from '@/components/login/ForgetPass'
import modifyPass from '@/components/login/modifyPass'
import register from '@/components/login/register.vue'
import index from '@/views/index.vue'
import info from '@/components/my/info'
import edit from '@/components/my/edit'
import playVideo from '@/components/owner/playVideo'
import sayList from '@/views/sayList.vue'
import zxList from '@/views/zxList.vue'
import videoList from '@/views/videoList.vue'
import sayDetail from '@/views/sayDetail.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/roleSelection',
			component: roleSelection
		},
		{
			path:'/index',
			name:'index',
			component:index
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
			path: '/info',
			component: info
		},
		{
			path: '/edit',
			component: edit
		},
		{
			path: '/playVideo',
			component: playVideo
			
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
		}
	]
})
