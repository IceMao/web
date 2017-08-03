/**
 * Created by ice on 2017/7/20.
 */
import Vue from "vue";
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';
import routes from './config/routes';
import showdown from 'showdown';
Vue.use(vueRouter);
Vue.use(vueResource);

//style
// require('./common/styles/bootstrap.min.css');
require('styles/common.css');

//script
require('scripts/bootstrap.min.js');
require('scripts/jquery.goup.min.js');
// require('scripts/showdown.js');
//路由
const router = new vueRouter({
    hashbang: false,
    mode: 'history',
    routes
});

const app = new Vue({
    router,
}).$mount('#app');