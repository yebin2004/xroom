<template>
  <div
    id="chartGraph"
    class="chart-common-box"
  ></div>
</template>

<script>
export default {
  name: 'chartGraph',
  props: {
    indexes: Array
  },
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart(this.indexes);
  },
  methods: {
    initChart: function(chartData) {
      let legendData = chartData.map(value => {
        return value.name;
      });
      let calSymSize = function(value) {
        var max = chartData.reduce(function(a, b) {
          console.log('mya:', a);

          return b.value > a.value ? b : a;
        });
        return value * (80 / max.value) * (value / 20) * (value / 20);
      };

      let option = {
        legend: [
          {
            left: '10%',
            right: '10%',

            data: legendData
          }
        ],
        color: ['#C71969', '#C78419', '#1984c7', '#19c7b9', '#19c719'],
        series: [
          {
            categories: [
              {
                name: chartData[0].name
              },
              {
                name: chartData[1].name
              },
              {
                name: chartData[2].name
              },
              {
                name: chartData[3].name
              },
              {
                name: chartData[4].name
              }
            ],
            top: '55%',

            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 200,
              edgeLength: 100
            },
            roam: true,
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: '{c}',
                fontSize: 20
              }
            },
            data: [
              {
                name: chartData[0].name,
                value: chartData[0].value,
                x: 500,
                y: 56,
                symbolSize: calSymSize(chartData[0].value),
                draggable: true,
                category: 0
              },
              {
                name: chartData[1].name,
                value: chartData[1].value,
                x: 0,
                y: 0,
                symbolSize: calSymSize(chartData[1].value),
                draggable: true,
                category: 1
              },
              {
                name: chartData[2].name,
                value: chartData[2].value,
                x: 0,
                y: 0,
                symbolSize: calSymSize(chartData[2].value),
                draggable: true,
                category: 2
              },
              {
                name: chartData[3].name,
                value: chartData[3].value,
                symbolSize: calSymSize(chartData[3].value),
                x: 0,
                y: 0,
                draggable: true,
                category: 3
              },
              {
                name: chartData[4].name,
                value: chartData[4].value,
                x: 0,
                y: 0,
                symbolSize: calSymSize(chartData[4].value),
                draggable: true,
                category: 4
              }
            ]
          }
        ]
      };
      var chartGraph = this.$echarts.init(document.getElementById('chartGraph'));
      chartGraph.setOption(option);

      window.addEventListener('resize', () => {
        chartGraph.resize();
      });
    }
  }
};
</script>
