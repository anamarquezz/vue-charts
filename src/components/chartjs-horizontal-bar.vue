<template>
    <div>
        <canvas v-if="!target" ref="canvas" :width="width" :height="height"/>
    </div>
</template>
<script>
  import ChartDefault from '../vue-chartjs-lib.js'

  export default {
    mixins: [
      ChartDefault,
    ],
    data () {
      return {
        type: 'horizontalBar',
        chart_data: {
          labels: this.labels,
          datasets: [{
            type: 'horizontalBar',
            label: this.datalabel,
            backgroundColor: this.backgroundcolor,
            borderColor: this.bordercolor,
            borderWidth: 1,
            data: this.data,
          },],
        },
        options: {
          scales: {
            yAxes: [{
              stacked: false
            }],
            xAxes: [{
              stacked: true
            }]
          }
        }
      }
    },
  }
</script>
