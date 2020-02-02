<template>
  <div
    id="chartProvince"
    class="chart-province"
  >
  </div>
</template>
<script>
import 'echarts-gl';
import { getProvinceParkList } from '../utils/api';
import { getProvincePinYin, getProvinceChinese } from '../utils/province';
import { loading } from '../common/mixin/loading';
export default {
  name: 'ChartProvince',
  inheritAttrs: false,
  mixins: [loading],
  props: {
    parkInfo: { type: Object, value: {} }
  },
  data: function() {
    return {};
  },
  watch: {
    parkInfo: function() {
      let pinYin = getProvincePinYin(this.parkInfo.province);
      if (this.provinceName != pinYin) {
        this.provinceName = pinYin;
        let provinceInit = import('../../../node_modules/echarts/map/js/province/' + pinYin + '.js');

        let provincePark = getProvinceParkList({ province: this.parkInfo.province });

        Promise.all([provincePark, provinceInit])
          .then(result => {
            this.parkList = result[0].parkList;
            this.initChart(this.convertCoordData(result[0].parkList), getProvinceChinese(this.parkInfo.province));
            console.debug(result);
          })
          .finally(() => {
            this.setLoading(false);
          });
      } else {
        this.resetMap(this.convertCoordData(this.parkList));
      }
    }
  },
  methods: {
    clickAction: function(parkId) {
      this.$emit('clickOther', parkId);
    },
    convertCoordData: function(parkList) {
      let coordData = [];
      let data1 = [];
      let data2 = [];
      let that = this;
      parkList.forEach(function(value) {
        let item = {};
        let itemValue = [];
        itemValue = []
          .concat(value.longitude)
          .concat(value.latitude)
          .concat('40')
          .concat(value.parkId);
        item['name'] = value.parkName;
        item['value'] = itemValue;
        if (value.parkId != that.parkInfo.parkId) {
          data1.push(item);
        } else {
          data2.push(item);
        }
      });
      coordData.push(data1);
      coordData.push(data2);
      console.debug('coordData', coordData);
      return coordData;
    },

    initChart: function(convertData, chineseName) {
      this.$echarts.getMap(chineseName).geoJson.features.forEach(function(feature) {
        // Remove cp
        feature.properties.cp = null;
      });
      var option = {
        backgroundColor: '#fff',
        geo3D: {
          map: chineseName,
          roam: false,
          itemStyle: {
            areaColor: '#8ff612',
            color: '#8ff612',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#999'
          },

          viewControl: {
            autoRotate: false,
            alpha: 60,
            projection: 'orthographic',
            orthographicSize: chineseName === '海南' ? 40 : 100,
            panSensitivity: chineseName === '海南' ? 0 : 1,
            center: chineseName === '海南' ? [-40, 270, 50] : [0, 0, 0]
          },
          label: {
            show: true,

            textStyle: {
              color: '#333',
              fontSize: 10,
              backgroundColor: 'rgba(255,255,255,0)'
            }
          },
          emphasis: {
            //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#333',
                fontSize: 10,
                backgroundColor: 'rgba(255,255,255,0)'
              }
            }
          },
          //shading: 'lambert',
          light: {
            //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10
            },
            ambient: {
              intensity: 0.3
            }
          },
          zlevel: -10
        },
        series: [
          {
            name: 'Other',
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            symbol: 'pin',
            symbolSize: 40,
            distance: 0,
            label: {
              normal: {},
              emphasis: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                  backgroundColor: '#007fff'
                },
                position: 'top',
                formatter: function(params) {
                  var content = params.name;
                  return content;
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#007fff' //标志颜色
              }
            },
            data: convertData[0],
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1000
          },
          {
            name: 'Current',
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            symbol: 'pin',
            symbolSize: 50,
            distance: 0,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 14,
                  backgroundColor: '#ff7f00'
                },
                position: 'top',
                formatter: function(params) {
                  var content = params.name;
                  return content;
                }
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#ff7f00' //标志颜色
              }
            },
            data: convertData[1],
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1000
          }
        ]
      };
      var chartProvince;
      if (this.chartProvince) {
        this.chartProvince.clear();
        chartProvince = this.chartProvince;
      } else {
        chartProvince = this.$echarts.init(document.getElementById('chartProvince'));
      }
      let that = this;
      chartProvince.on('click', function(params) {
        console.log('click event', params);
        if (params.componentType === 'series') {
          if (params.seriesName === 'Other') {
            that.clickAction(params.value[3]);
          }
        }
      });
      chartProvince.setOption(option);

      window.addEventListener('resize', () => {
        chartProvince.resize();
      });

      this.chartProvince = chartProvince;
    },
    resetMap: function(convertData) {
      let option = this.chartProvince.getOption();
      option.series[0].data = convertData[0];
      option.series[1].data = convertData[1];
      this.chartProvince.setOption(option);
    }
  }
};
</script>