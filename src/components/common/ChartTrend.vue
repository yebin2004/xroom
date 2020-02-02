<template>
  <div
    id="chartTrend"
    class="chart-trend"
  ></div>
</template>

<script>
export default {
  name: 'chartTrend',
  data: function() {
    return {};
  },
  props: {
    chartData: Object
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      //双线混合
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
          data: this.chartData.legendData,
          textStyle: {
            color: '#999999',
            fontSize: 12
          }
        },
        xAxis: [
          {
            type: 'category',
            data: this.chartData.xData,
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
            name: this.chartData.legendData[0],
            type: 'line',
            yAxisIndex: 0,
            data: this.chartData.y0Data,
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
            name: this.chartData.legendData[1],
            type: 'line',
            yAxisIndex: 1,
            data: this.chartData.y1Data,
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
      var chartTrend = this.$echarts.init(document.getElementById('chartTrend'));
      chartTrend.setOption(option);

      window.addEventListener('resize', () => {
        chartTrend.resize();
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