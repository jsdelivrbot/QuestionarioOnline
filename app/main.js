import Vue from 'vue';
import App from './App';
import router from './router';
import 'vueify/lib/insert-css'; // required for .vue file <style> tags

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
