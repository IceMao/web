/**
 * Created by ice on 2017/7/20.
 */
import Index from './../views/index.vue';
import Post from './../views/post.vue';
import Edit from './../views/edit.vue';

export default [{
    path: '/',
    redirect: 'index'
}, {
    path: '/index',
    component: Index
}, {
    path: '/post',
    component: Post
}, {
    path: '/edit',
    component: Edit
}]