<template>
  <div
    id="chartIndexAbility"
    class="py-2 chart-right"
  ></div>
</template>

<script>
import optionUtil from '../utils/chart-option';
export default {
  name: 'chartIndexAbility',
  props: { chartData: Array },
  watch: {
    chartData: function() {
      this.initChart(this.chartData);
    }
  },
  methods: {
    initChart: function(chartData) {
      console.log('chartData', chartData);
      let option = optionUtil.setOptionData(this.$echarts, chartData);

      var chartIndexAbility = this.$echarts.init(document.getElementById('chartIndexAbility'));
      chartIndexAbility.setOption(option);

      chartIndexAbility.on('click', function(params) {
        // console.log('click event');
        if (params.componentType === 'series') {
          if (params.seriesType === 'bar') {
            window.location.href = '/core-compat';
          }
        }
      });
      window.addEventListener('resize', () => {
        chartIndexAbility.resize();
      });
    }
  }
};
</script>