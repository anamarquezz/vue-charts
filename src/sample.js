import Vue from 'vue'
import VueCharts from './vue-charts'

Vue.use(VueCharts)
window.Vue = Vue

const app = new Vue({
  el: '#app',
})

console.log(window.Vue)