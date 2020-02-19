<template>
  <div
    id="chartTrend"
    class="chart-trend"
  ></div>
</template>

<script>
export default {
  name: 'ChartTrend',
  props: {
    chartData: Object
  },
  mounted: function() {
    this.initChart(this.chartData);
  },
  methods: {
    initChart: function(chartData) {
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
        grid: {
          top: '30',
          bottom: '20'
        },
        legend: {
          data: chartData.legendData,
          right: 60,
          top: 0,
          textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: 9
          },
          itemWidth: 15,
          itemHeight: 10
        },
        xAxis: [
          {
            type: 'category',
            data: chartData.xData,
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#FFF',
                fontSize: 9
              }
              //interval:0,
              //rotate:30
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '^',
            min: 0,
            max: 5000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: '#ffffff',
              fontSize: 9
            },
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 9
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(250,250,250,0.05)'
              }
            }
          },
          {
            type: 'value',
            name: '千万',
            min: 0,
            max: 5000,
            interval: 1000,
            axisLabel: {
              formatter: '{value}',
              color: '#ffffff',
              fontSize: 9
            },
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 9
            },

            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.05)', 'rgba(250,250,250,0.0)']
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(250,250,250,0.05)'
              }
            }
          }
        ],
        series: [
          {
            name: chartData.legendData[0],
            type: 'bar',
            data: chartData.y0Data,
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#ff7f00'
                  },
                  {
                    offset: 0,
                    color: '#db9f1e'
                  }
                ])
              }
            }
          },

          {
            name: chartData.legendData[1],
            type: 'line',
            yAxisIndex: 1,
            data: chartData.y1Data,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 6,
            lineStyle: {
              normal: {
                width: 3,
                color: '#93d8ac'
              }
            },
            itemStyle: {
              normal: {
                color: '#93d8ac'
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