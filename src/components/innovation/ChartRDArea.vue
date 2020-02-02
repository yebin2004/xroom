<template>
  <div
    id="chartRDArea"
    class="chart-common-box "
  ></div>
</template>
<script>
export default {
  name: 'chartRDArea',
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      let option = {
        grid: {
          left: '6%',
          right: '6%',
          bottom: '1%',
          containLabel: true
        },
        legend: {
          data: ['R&D成功率']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['12', '13', 14, '15', '16', '17', '18']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'R&D成功率',
            data: [62, 73, 80, 93, 90, 95, 92],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
      var chartRDArea = this.$echarts.init(document.getElementById('chartRDArea'));
      chartRDArea.setOption(option);

      window.addEventListener('resize', () => {
        chartRDArea.resize();
      });
    }
  }
};
</script>