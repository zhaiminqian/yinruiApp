import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import ForgetPass from '@/components/login/ForgetPass'
import modifyPass from '@/components/login/modifyPass'

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
			path: '/ForgetPass',
			name: 'ForgetPass',
			component: ForgetPass
		},
		{
			path: '/modifyPass',
			name: 'modifyPass',
			component :modifyPass
		}
	]
})
