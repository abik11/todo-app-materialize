import '../css/main.scss';
import "../../node_modules/materialize-css/dist/js/materialize.min.js";
require.context("../img/", true, /\.(jpe?g|png|gif|svg)$/i);
import Vue from 'vue';
import VueRouter from 'vue-router';
import List from './components/List.vue';
import Help from './components/Help.vue';
import Comments from './components/comments.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history', //REMOVE THIS FOR CORDOVA
	base: __dirname,
	routes: [
		{ path: '/', component: List },
		{ path: '/help', component: Help },
		{ path: '/comments', component: Comments }
	]
});

new Vue({router}).$mount("#app");
