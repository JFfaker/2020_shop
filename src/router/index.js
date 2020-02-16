
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/Home/Home.vue"
import Order from "../pages/Order/Order.vue"
import People from "../pages/People/People.vue"
import Search from "../pages/Search/Search.vue"
import Login from "../pages/Login/Login.vue"

Vue.use(VueRouter)


export default new VueRouter({
	routes:[
		{
			path:"/",
			redirect:'/home'
		},
		{
			path:'/home',
			component:Home,
			meta:{
				showFoter:true
			}
		},
		{
			path:'/order',
			component:Order,
			meta:{
				showFoter:true
			}
		},
		{
			path:'/people',
			component:People,
			meta:{
				showFoter:true
			}
		},
		{
			path:'/search',
			component:Search,
			meta:{
				showFoter:true
			}
		},
		{
			path:"/login",
			component:Login
		}
	]
})