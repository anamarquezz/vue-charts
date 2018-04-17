import ChartJsLine from './components/chartjs-line.vue'
import ChartJsBar from './components/chartjs-bar.vue'
import ChartJsHorizontalBar from './components/chartjs-horizontal-bar.vue'
import ChartJsRadar from './components/chartjs-radar.vue'
import ChartJsPolarArea from './components/chartjs-polar-area.vue'
import ChartJsPie from './components/chartjs-pie.vue'
import ChartJsDoughnut from './components/chartjs-doughnut.vue'

require('chart.js')

export default {
  install (Vue) {
    Vue.component('chartjs-line', ChartJsLine)
    Vue.component('chartjs-bar', ChartJsBar)
    Vue.component('chartjs-horizontal-bar', ChartJsHorizontalBar)
    Vue.component('chartjs-radar', ChartJsRadar)
    Vue.component('chartjs-polar-area', ChartJsPolarArea)
    Vue.component('chartjs-pie', ChartJsPie)
    Vue.component('chartjs-doughnut', ChartJsDoughnut)
  }
}
