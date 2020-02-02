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
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
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
          data: ['参军企业', '军费支出'],
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
            data: ['09年', '10年', '11年', '12年', '13年', '14年', '15年', '16年'],
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
            name: '参军企业',
            type: 'bar',
            data: [800, 1300, 2280, 2800, 3001, 3100, 3600, 3999],
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
            name: '军费支出',
            type: 'line',
            yAxisIndex: 1,
            data: [1800, 2500, 2550, 3000, 3900, 2800, 2888, 3500],
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
              normal: {
                width: 3,
                color: '#93d8ac'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.0)',
                borderWidth: 3,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 100,*/
                borderColor: '#93d8ac'
              }
            }
          }
        ]
      };
      var chartTrend = this.$echarts.init(document.getElementById('chartTrend'));
      chartTrend.setOption(option);
    }
  }
};
</script>