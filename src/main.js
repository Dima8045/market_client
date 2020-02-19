import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VAnimateCss from 'v-animate-css';
import './assets/styles/main.scss'

Vue.component('header-section', require('./components/sections/Header.vue').default);
Vue.component('navbar-section', require('./components/sections/Navbar.vue').default);
Vue.component('hero-general', require('./components/elements/HeroGeneral.vue').default);
Vue.component('subscribe-section', require('./components/sections/SubscribeSection.vue').default);
Vue.component('footer-section', require('./components/sections/Footer.vue').default);


Vue.config.productionTip = false

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
Vue.use(VAnimateCss);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
