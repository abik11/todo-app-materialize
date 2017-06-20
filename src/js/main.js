import '../css/main.scss'
require.context("../img/", true, /\.(jpe?g|png|gif|svg)$/i);
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import List from './components/List.vue'
import Help from './components/Help.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	mode: 'history', //REMOVE THIS FOR CORDOVA
	base: __dirname,
	routes: [
		{ path: '/', component: List },
		{ path: '/help', component: Help }
	]
})

Vue.config.productionTips = false;
new Vue({router}).$mount("#app")
