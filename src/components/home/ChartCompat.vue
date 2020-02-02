<template>
  <div
    id="chartCompat"
    class="py-2 chart-right"
  ></div>
</template>

<script>
import optionUtil from '../utils/chart-option';
export default {
  name: 'chartCompat',
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      let option = optionUtil.setOptionData(this.$echarts);
      var chartCompat = this.$echarts.init(document.getElementById('chartCompat'));
      option.series[0].itemStyle.color = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
          offset: 0,
          color: '#ff7f00' //柱图渐变色起点颜色
        },
        {
          offset: 1,
          color: '#db9f1e' //柱图渐变色终点颜色
        }
      ]);
      option.yAxis[1].axisLabel.textStyle.color = function() {
        return '#ff7f00';
      };
      chartCompat.setOption(option);

      window.addEventListener('resize', () => {
        chartCompat.resize();
      });
    }
  }
};
</script>