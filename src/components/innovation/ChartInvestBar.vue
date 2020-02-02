<template>
  <div
    id="chartInvestBar"
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
      //'折柱混合';

      var colors = ['#5793f3', '#d14a61', '#675bba', '#FF5000'];
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        color: colors,
        grid: {
          right: '25%',
          left: '25%',
          bottom: '9%'
        },
        legend: {
          data: ['实验室数量', 'R&D经费', '经费年平均增长幅度', '政府扶持力度'],
          itemWidth: 15,
          itemHeight: 10
        },
        xAxis: [
          {
            type: 'category',
            data: ['14年', '15年', '16年', '17年', '18年', '19年'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 250,
            interval: 50,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            max: 250,
            interval: 50,
            position: 'left',
            offset: 40,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            interval: 200,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            position: 'right',
            offset: 40,
            axisLine: {
              lineStyle: {
                color: colors[3]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: '实验室数量',
            type: 'bar',
            data: [10, 35, 54, 62, 78, 76],
            barWidth: 6,
            itemStyle: {
              normal: {
                barBorderRadius: 5
              }
            }
          },
          {
            name: '政府扶持力度',
            type: 'bar',
            data: [26, 59, 90, 100, 127, 170],
            barWidth: 6,
            itemStyle: {
              normal: {
                barBorderRadius: 5
              }
            }
          },
          {
            name: 'R&D经费',
            type: 'line',
            yAxisIndex: 2,
            data: [20, 60, 100, 300, 450, 600]
          },
          {
            name: '经费年平均增长幅度',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7],
            barWidth: 5,
            itemStyle: {
              normal: {
                barBorderRadius: 5
              }
            }
          }
        ]
      };

      var chartInvestBar = this.$echarts.init(document.getElementById('chartInvestBar'));
      chartInvestBar.setOption(option);

      window.addEventListener('resize', () => {
        chartInvestBar.resize();
      });
    }
  }
};
</script>