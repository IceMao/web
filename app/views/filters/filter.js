import Vue from "vue"

Vue.filter('uppercase', function(val) {
    if (!val) return '';
    return val.toString().toUpperCase();
})