/**
 * Created by ice on 2017/7/20.
 */
import Vue from "vue";
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';
import routes from './config/routes';

Vue.use(vueRouter);
Vue.use(vueResource);

//style
// require('./common/styles/bootstrap.min.css');
require('./common/styles/common.css');

//script
require('./common/scripts/bootstrap.min.js');
require('./common/scripts/jquery.goup.min.js');
//路由
const router = new vueRouter({
    hashbang: false,
    mode: 'history',
    routes
});

const app = new Vue({
    router,
}).$mount('#app');