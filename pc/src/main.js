// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs';
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
/*axios*/
import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.0.109';
axios.interceptors.request.use(config => {
	if(config.method === 'post') {
		let params = config.data || {};
		config.data = qs.stringify(params);
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	}
	return config;
}, error => {
	return Es6Promise.reject(error);
});
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
