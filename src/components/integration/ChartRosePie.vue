<template>
  <div
    id="chartRosePie"
    class="chart-common-box "
  ></div>
</template>

<script>
export default {
  name: 'chartDepartmentTree',
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        calculable: true,
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: ['30%', '90%'],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              {
                value: 10,
                name: 'rose1'
              },
              {
                value: 5,
                name: 'rose2'
              },
              {
                value: 15,
                name: 'rose3'
              },
              {
                value: 25,
                name: 'rose4'
              },
              {
                value: 20,
                name: 'rose5'
              },
              {
                value: 35,
                name: 'rose6'
              },
              {
                value: 30,
                name: 'rose7'
              },
              {
                value: 40,
                name: 'rose8'
              }
            ]
          }
        ]
      };
      var chartRosePie = this.$echarts.init(document.getElementById('chartRosePie'));
      chartRosePie.setOption(option);

      window.addEventListener('resize', () => {
        chartRosePie.resize();
      });
    }
  }
};
</script>
