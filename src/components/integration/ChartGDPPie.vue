<template>
  <div
    id="chartGdpPie"
    class="chart-common-box "
  ></div>
</template>

<script>
export default {
  name: 'chartGDPPie',
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
          orient: 'vertical', // 'vertical'
          x: 'left', // 'center' | 'left' | {number},
          y: 'top', // 'center' | 'bottom' | {number}
          padding: 10, // [5, 10, 15, 20]
          itemGap: 10,
          textStyle: {
            color: '#333333'
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}%'
        },

        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            selectedMode: 'single',
            selectedOffset: 10,
            startAngle: 45,
            clockwise: true,
            center: ['50%', '65%'],
            color: ['#8d99a1', '#007fff'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [
              {
                value: 25,
                name: '军民融合企业创收'
              },
              {
                value: 75,
                name: '当地GDP值'
              }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',

            label: {
              normal: {
                // formatter: ['{c|{b}{d}%}', '{b|{b}}'].join('\n'),
                formatter: '{d}%',
                position: 'inside',
                rich: {
                  b: {
                    color: '#d9efff',
                    fontSize: 15,
                    height: 40
                  },
                  c: {
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 5
                  }
                }
              }
            },

            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      };
      var chartGdpPie = this.$echarts.init(document.getElementById('chartGdpPie'));
      chartGdpPie.setOption(option);

      window.addEventListener('resize', () => {
        chartGdpPie.resize();
      });
    }
  }
};
</script>
