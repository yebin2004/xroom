<template>
  <div
    id="mapChina"
    class="map-china"
  ></div>
</template>

<script>
import '../../../node_modules/echarts/map/js/china.js';
export default {
  name: 'mapChina',
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      let randomData = function() {
        return Math.round(Math.random() * 500);
      };

      let mydata = [
        {
          name: '北京',
          value: randomData()
        },
        {
          name: '天津',
          value: randomData()
        },
        {
          name: '上海',
          value: randomData()
        },
        {
          name: '重庆',
          value: randomData()
        },
        {
          name: '河北',
          value: randomData()
        },
        {
          name: '河南',
          value: randomData()
        },
        {
          name: '云南',
          value: randomData()
        },
        {
          name: '辽宁',
          value: randomData()
        },
        {
          name: '黑龙江',
          value: randomData()
        },
        {
          name: '湖南',
          value: randomData()
        },
        {
          name: '安徽',
          value: randomData()
        },
        {
          name: '山东',
          value: randomData()
        },
        {
          name: '新疆',
          value: randomData()
        },
        {
          name: '江苏',
          value: randomData()
        },
        {
          name: '浙江',
          value: randomData()
        },
        {
          name: '江西',
          value: randomData()
        },
        {
          name: '湖北',
          value: randomData()
        },
        {
          name: '广西',
          value: randomData()
        },
        {
          name: '甘肃',
          value: randomData()
        },
        {
          name: '山西',
          value: randomData()
        },
        {
          name: '内蒙古',
          value: randomData()
        },
        {
          name: '陕西',
          value: randomData()
        },
        {
          name: '吉林',
          value: randomData()
        },
        {
          name: '福建',
          value: randomData()
        },
        {
          name: '贵州',
          value: randomData()
        },
        {
          name: '广东',
          value: randomData()
        },
        {
          name: '青海',
          value: randomData()
        },
        {
          name: '西藏',
          value: randomData()
        },
        {
          name: '四川',
          value: randomData()
        },
        {
          name: '宁夏',
          value: randomData()
        },
        {
          name: '海南',
          value: randomData()
        },
        {
          name: '台湾',
          value: randomData()
        },
        {
          name: '香港',
          value: randomData()
        },
        {
          name: '澳门',
          value: randomData()
        }
      ];

      let option = {
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          x: 'left',
          y: 'bottom',
          splitList: [
            {
              start: 500,
              end: 600
            },
            {
              start: 400,
              end: 500
            },
            {
              start: 300,
              end: 400
            },
            {
              start: 200,
              end: 300
            },
            {
              start: 100,
              end: 200
            },
            {
              start: 0,
              end: 100
            }
          ],
          color: ['#0b3570', '#093267', '#12448c', '#1253a6', '#155fb1', '#207ace']
        },
        series: [
          {
            name: '随机数据',
            type: 'map',
            mapType: 'china',
            roam: true,
            zoom: 1.2,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            data: mydata
          }
        ]
      };
      var mapChina = this.$echarts.init(document.getElementById('mapChina'));
      mapChina.setOption(option);

      /* window.addEventListener('resize', () => {
        mapChina.resize()
      }) */
    }
  }
};
</script>
