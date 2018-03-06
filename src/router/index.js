import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import register from '@/components/register'
=======
import login from '@/views/login'
>>>>>>> c17c1a3486253909ffa237788624d4535278dcee

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    }
  ]
=======
	mode:'history',
	routes: [
		{
		path: '/login',
		name: 'login',
		component: login
		}
	]
>>>>>>> c17c1a3486253909ffa237788624d4535278dcee
})
