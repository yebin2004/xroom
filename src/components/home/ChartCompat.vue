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
  props: { chartData: Array },
  watch: {
    chartData: function() {
      this.initChart(this.chartData);
    }
  },
  methods: {
    initChart: function(chartData) {
      let option = optionUtil.setOptionData(this.$echarts, chartData);
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
      let that = this;
      chartCompat.on('click', function(params) {
        console.log('click event', params);
        let comId = null;
        if (params.componentType === 'series') {
          if (params.seriesType === 'bar') {
            comId = params.data.id;
          }
        } else if (params.componentType === 'yAxis') {
          if (params.yAxisIndex === 0) {
            comId = getIdByLable(params.value, 'name');
          } else {
            comId = getIdByLable(params.value, 'value');
          }
        }
        console.debug('comId', comId);
        that.$router.push('ente-compat/' + comId);
      });
      window.addEventListener('resize', () => {
        chartCompat.resize();
      });

      const getIdByLable = function(lable, type) {
        let item = null;
        if (type === 'name') {
          item = chartData.find(function(x) {
            return x.name == lable;
          });
        } else if (type === 'value') {
          item = chartData.find(function(x) {
            return x.value == lable;
          });
        }
        return item.id;
      };
    }
  }
};
</script>