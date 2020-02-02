<template>
  <div
    id="chartGDP"
    class="chart-gdp"
  ></div>
</template>

<script>
export default {
  name: 'chartGDP',
  props: { proportion: Number },
  watch: {
    proportion: function() {
      this.initChart(this.proportion);
    }
  },
  methods: {
    initChart: function(chartData) {
      //环状图
      // 圆环图各环节的颜色
      var color = ['#16465d', '#916a39'];

      // 圆环图各环节的名称和值(系列中各数据项的名称和值)
      var data = [
        {
          value: 100 - chartData,
          name: '其他'
        },
        {
          value: chartData,
          name: '军民融合企业'
        }
      ];

      // 指定图表的配置项和数据
      let option = {
        // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
        graphic: {
          type: 'text', // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
          top: 'center', // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
          left: 'center', // 同上
          style: {
            text: '占GDP比重', // 文本块文字。可以使用 \n 来换行。[ default: '' ]
            fill: '#fff', // 填充色。
            fontSize: 8, // 字体大小
            fontWeight: 'normal' // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
          }
        },

        // 系列列表
        series: [
          {
            name: '军民融合企业营收占GDP比重', // 系列名称
            type: 'pie', // 系列类型
            center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
            radius: ['55%', '80%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
            hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
            color: color, // 圆环图的颜色
            label: {
              // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
              normal: {
                show: true, // 是否显示标签[ default: false ]
                position: 'outside',
                formatter: '{c}%' // 标签内容
              },
              emphasis: {
                show: true, // 是否显示标签[ default: false ]
                position: 'outside', // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                formatter: '{c}%\n{b}' // 标签内容
              }
            },
            labelLine: {
              // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
              normal: {
                show: true, // 是否显示视觉引导线。
                length: 5, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                length2: 5 // 视觉引导项第二段的长度。
              },
              emphasis: {
                show: true, // 是否显示视觉引导线。
                length: 5, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                length2: 8, // 视觉引导项第二段的长度。
                lineStyle: {
                  // 视觉引导线的样式
                  //color: '#',
                  width: 3
                }
              }
            },
            data: data // 系列中的数据内容数组。
          }
        ]
      };
      var chartGDP = this.$echarts.init(document.getElementById('chartGDP'));
      chartGDP.setOption(option);

      window.addEventListener('resize', () => {
        chartGDP.resize();
      });
    }
  }
};
</script>