import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.scss'

Vue.component('header-section', require('./components/sections/Header.vue').default);
Vue.component('navbar-section', require('./components/sections/Navbar.vue').default);
Vue.component('hero-general', require('./components/elements/HeroGeneral.vue').default);
Vue.component('subscribe-section', require('./components/sections/SubscribeSection.vue').default);
Vue.component('footer-section', require('./components/sections/Footer.vue').default);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
