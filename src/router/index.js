import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import ForgetPass from '@/components/login/ForgetPass'
import modifyPass from '@/components/login/modifyPass'
import register from '@/components/login/register.vue'
import index from '@/views/index.vue'
import info from '@/components/my/info'
Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
			path:'/',
			name:'index',
			component:index
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
			path: '/info',
			component: info
		}
	]
})
