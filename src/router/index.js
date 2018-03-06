import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import register from '@/components/login/register.vue'
import index from '@/components/index.vue'
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
			path: '/register',
			component: register
		}
	]
})
