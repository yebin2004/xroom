<template>
  <div
    id="mapChina"
    class="map-china"
  ></div>
</template>

<script>
import '../../../node_modules/echarts/map/js/china.js';
const cityCoordData = require('../../assets/mock/city-coord.json');
const mockCityData = require('../../assets/mock/city.json');
const mockCitySpecialData = require('../../assets/mock/city-special.json');
export default {
  name: 'mapChina',
  data: function() {
    return {
      cityCoordData: cityCoordData,
      cityList: mockCityData,
      citySpecial: mockCitySpecialData
    };
  },
  mounted: function() {
    this.initChart(this.cityCoordData, this.cityList, this.citySpecial);
  },
  methods: {
    initChart: function(cityCoordData, cityList, citySpecial) {
      var geoCoordMap = cityCoordData;

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };

      let option = {
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return params.name + ' : ' + params.value[2];
          }
        },

        visualMap: {
          show: false,
          min: 0,
          max: 500,
          calculable: true,
          color: ['#d94e5d', '#eac736', '#50a3ba'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          /*  left: 0,
          top: 0,
          right: 0,
          bottom: 5, */
          layoutCenter: ['50%', '50%'],
          // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
          layoutSize: '125%',
          roam: true,
          map: 'china',
          label: {
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              areaColor: {
                // 地图区域的颜色
                type: 'radial', // 径向渐变
                x: 0.5, // 圆心 x,y
                y: 0.5,
                r: 0.8, // 半径
                colorStops: [
                  {
                    offset: 0,
                    color: '#0b3570' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#207ace' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
        series: [
          {
            zoom: 1.5,
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(cityList),
            symbolSize: 10,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1
              }
            }
          },
          {
            zoom: 1.5,
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(citySpecial),

            symbolSize: 20,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1
              }
            }
          }
        ]
      };
      var chart = this.$echarts.init(document.getElementById('mapChina'));
      chart.setOption(option);

      window.addEventListener('resize', () => {
        chart.resize();
      });
    }
  }
};
</script>
