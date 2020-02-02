<template>
  <div
    id="chartCredit"
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
      var chartCredit = this.$echarts.init(document.getElementById('chartCredit'));
      option.yAxis[1].axisLabel.textStyle.color = function(value, index) {
        if (option.data[index].value > 80) {
          return '#00d800';
        } else if (option.data[index].value > 50) {
          return '#ff7f00';
        } else {
          return '#ff0000';
        }
      };
      let self = this;
      option.series[0].itemStyle.color = function(params) {
        if (option.data[params.dataIndex].value > 80) {
          return new self.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#00d800' //柱图渐变色起点颜色
            },
            {
              offset: 1,
              color: '#0fca14' //柱图渐变色终点颜色
            }
          ]);
        } else if (option.data[params.dataIndex].value > 50) {
          return new self.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#ff7f00' //柱图渐变色起点颜色
            },
            {
              offset: 1,
              color: '#db9f1e' //柱图渐变色终点颜色
            }
          ]);
        } else {
          return new self.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#ff0000' //柱图渐变色起点颜色
            },
            {
              offset: 1,
              color: '#ff0000' //柱图渐变色终点颜色
            }
          ]);
        }
      };
      option.yAxis[1].axisLabel.color = '#916a39';
      chartCredit.setOption(option);
      chartCredit.on('click', function(params) {
        // console.log('click event');
        if (params.componentType === 'series') {
          if (params.seriesType === 'bar') {
            window.location.href = '/ente-credit';
          }
        }
      });
      window.addEventListener('resize', () => {
        chartCredit.resize();
      });
    }
  }
};
</script>