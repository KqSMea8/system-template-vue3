//import Vue from "vue"
import enable from '@ele/enable'
import Router from "vue-router"
import ElementUI from "element-ui"
import store from "../vuex"
import router from "../router"
import App from "./app"
import "element-ui/lib/theme-chalk/index.css"
import "../assets/scss/main.scss"
import 'font-awesome/css/font-awesome.css'
import filters from '../filters/index'
// Object.keys(filters).forEach(key => {
// 	Vue.filter(key, filters[key])
// })

enable.god.init('https://faf9c182fd7448d2bbd21c022f2d91ef@perf.ele.me/90','testId','app-base.faas.ele.me',()=>{
	Vue.use(Router)
	Vue.use(ElementUI)
	new Vue({
		el: '#app',
		router: router,
		store: store,
		render: h => h(App)
	})
})





