<template>
  <div class="ente-card subject-card shadow py-4 px-3">
    <div class="ente-label pb-2">知识产权</div>
    <div
      id="chartIPCircle"
      class="subject-chart"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'chartIP',
  props: { ipList: Array },

  mounted: function() {
    this.initChart(this.ipList);
  },
  methods: {
    initChart: function(chartData) {
      //环状图
      let letendData = chartData.map(value => {
        return value.name;
      });
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          show: false,
          orient: 'vertical',
          x: 'left',
          data: letendData
        },
        color: ['#4f9cee', '#79de94', '#f2ca82', '#f18167', '#d0acf0', '#cce6fc', '#3feed4'],
        series: [
          {
            name: '知识产权',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: true,

            data: chartData
          }
        ]
      };
      var chartIPCircle = this.$echarts.init(document.getElementById('chartIPCircle'));
      chartIPCircle.setOption(option);

      window.addEventListener('resize', () => {
        chartIPCircle.resize();
      });
    }
  }
};
</script>

<style  scoped src="../../assets/css/ente-credit.css">
</style>