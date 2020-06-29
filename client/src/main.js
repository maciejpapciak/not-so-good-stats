import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Fragment from 'vue-fragment';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

Vue.use(Toast, {
	transition: 'Vue-Toastification__bounce',
	maxToasts: 5,
	newestOnTop: true
});

Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
