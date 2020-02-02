<template>
  <div
    id="chartPCArea"
    class="chart-common-box "
  ></div>
</template>
<script>
export default {
  name: 'charPCArea',
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      let option = {
        legend: {
          data: ['技术密集度', '专业技术人员工作效率', '生产设备新度', '设备国际先进程度']
        },
        grid: {
          left: '6%',
          right: '7%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['12', '13', '14', '15', '16', '17', '18']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '技术密集度',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '专业技术人员工作效率',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '生产设备新度',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },

          {
            name: '设备国际先进程度',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {
              normal: {}
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      var chartPCArea = this.$echarts.init(document.getElementById('chartPCArea'));
      chartPCArea.setOption(option);

      window.addEventListener('resize', () => {
        chartPCArea.resize();
      });
    }
  }
};
</script>