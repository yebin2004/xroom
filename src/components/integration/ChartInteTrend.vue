<template>
  <div
    id="chartIntegrationTrend"
    class="chart-trend"
  ></div>
</template>

<script>
export default {
  name: 'chartInteTrend',
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      //混合
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          top: '30',
          bottom: '20'
        },
        legend: {
          data: ['当地历年军民融合GDP值', '当地历年军民融合企业数'],
          textStyle: {
            color: '#999999',
            fontSize: 12
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2007年',
              '2008年',
              '2019年',
              '2010年',
              '2011年',
              '2012年',
              '2013年',
              '2014年',
              '2015年',
              '2016年',
              '2017年',
              '2018'
            ],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#000',
                fontSize: 11
              }
              //interval:0,
              //rotate:30
            },
            axisLine: {
              lineStyle: {
                color: '#007fff'
              }
            },
            splitLine: {
              show: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            interval: 250,
            nameTextStyle: {
              color: '#000',
              fontSize: 11
            },
            axisLabel: {
              color: '#000',
              fontSize: 11,
              formatter: function(val) {
                return val + '  千万';
              }
            },
            axisLine: {
              lineStyle: {
                color: '#007fff'
              }
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            interval: 250,
            nameTextStyle: {
              color: '#000',
              fontSize: 11
            },
            axisLabel: {
              color: '#000',
              fontSize: 11,
              formatter: function(val) {
                return val + '  个';
              }
            },
            axisLine: {
              lineStyle: {
                color: '#007fff'
              }
            }
          }
        ],
        series: [
          {
            name: '当地历年军民融合GDP值',
            type: 'line',
            yAxisIndex: 0,
            data: [170, 320, 445, 740, 629, 800, 1010, 800, 810, 880, 1150, 1300],
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            lineStyle: {
              normal: {
                width: 3,
                color: '#ff8b17'
              }
            },
            itemStyle: {
              normal: {
                color: '#ff8b17'
              }
            }
          },

          {
            name: '当地历年军民融合企业数',
            type: 'line',
            yAxisIndex: 1,
            data: [260, 250, 270, 740, 510, 900, 1100, 700, 560, 800, 1050, 1000],
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            lineStyle: {
              normal: {
                width: 3,
                color: '#30a7ff'
              }
            },
            itemStyle: {
              normal: {
                color: '#30a7ff'
              }
            }
          }
        ]
      };
      var chartIntegrationTrend = this.$echarts.init(document.getElementById('chartIntegrationTrend'));
      chartIntegrationTrend.setOption(option);

      window.addEventListener('resize', () => {
        chartIntegrationTrend.resize();
      });
    }
  }
};
</script>

<style scoped>
.chart-trend {
  height: 18.409rem;
  width: 100%;
}
</style>