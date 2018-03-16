import Vue from 'vue'
import Router from 'vue-router'
// 登录模块
import login from '@/views/login'
import roleSelection from '@/components/login/roleSelection'
import ForgetPass from '@/components/login/ForgetPass'
import modifyPass from '@/components/login/modifyPass'
import register from '@/components/login/register'
// 首页模块
import index from '@/views/index'

// 我的模块




import info from '@/components/my/info'
import edit from '@/components/my/edit'
import playVideo from '@/components/owner/playVideo'
import sayList from '@/views/sayList.vue'
import zxList from '@/views/zxList.vue'
import videoList from '@/views/videoList.vue'
import sayDetail from '@/views/sayDetail.vue'

import myPage from '@/components/my/myPage'
Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		// 登录路由
		{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/roleSelection',
			name: 'roleSelection',
			component: roleSelection
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
			name: 'register',
			component: register
		},
		// 首页路由
		{
			path:'/index',
			name:'index',
			component:index
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
		},
		{
			path: '/myPage',
			component: myPage
		}
	]
})
