import "materialize-css";
require.context("../img/", true, /\.(jpe?g|png|gif|svg)$/i);
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Locale from './language/vue-i18n-locales.js';
//---
import '../css/main.scss';
import App from "./app.vue";
import List from './components/List.vue';
import Help from './components/Help.vue';
import Comments from './components/comments.vue';

Vue.use(VueRouter);
Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: Locale
});

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: List },
		{ path: '/help', component: Help },
		{ path: '/comments', component: Comments }
	]
});

new Vue({ components: { App }, router, i18n }).$mount("#app");