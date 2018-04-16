import ChartJsLine from './components/chartjs-line'
import ChartJsBar from './components/chartjs-bar'
import ChartJsHorizontalBar from './components/chartjs-horizontal-bar'
import ChartJsRadar from './components/chartjs-radar'
import ChartJsPolarArea from './components/chartjs-polar-area'
import ChartJsPie from './components/chartjs-pie'
import ChartJsDoughnut from './components/chartjs-doughnut'

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
