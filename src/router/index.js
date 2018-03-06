import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import register from '@/components/login/register.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
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
