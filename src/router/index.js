import Router from "vue-router";

const index = resolve => require(['@/pages/index.vue'], resolve)
// const activities = resolve => require(['@/pages/operationManagement/promotionalActivities/index.vue'], resolve)
// const salesOrder = resolve => require(['@/pages/storeManagement/salesOrder/index.vue'], resolve)

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition
	} else {
		const position = {}
		if (to.hash) {
			position.selector = to.hash
		}
		if (to.matched.some(m => m.meta.scrollToTop)) {
			position.x = 0
			position.y = 0
		}
		return position
	}
}

const routerMap = new Router({
	// mode: 'history',
	// scrollBehavior,
	routes: [
		{
			path: '/',
			name: 'Welcome',
			component: resolve => require(['@/pages/welcome.vue'], resolve)
		},
		{
			path: '/index',
			name: '首页',
			component: index
		},
	]
})

if(routerMap.options.routes && routerMap.options.routes.length > 0){
	let routes = routerMap.options.routes
	let menus = []
	routes.forEach(item => {
		menus.push({menuName:item.name,url:item.path})
	})
	sessionStorage.setItem("routermenus",JSON.stringify(menus))
}

routerMap.beforeEach((to, from, next) => {
	next()
})

routerMap.afterEach((to, from, next) => {


})

export default routerMap
