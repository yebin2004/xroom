export default {
  setOptionData: function (echarts) {
    var data = [{
        name: '中核集团',
        value: (Math.random() * 100).toFixed(0),
        sum: 100
      },
      {
        name: '航天科技',
        value: (Math.random() * 100).toFixed(0),
        sum: 100
      },
      {
        name: '航天科工',
        value: (Math.random() * 100).toFixed(0),
        sum: 100
      },
      {
        name: '航天工业',
        value: (Math.random() * 100).toFixed(0),
        sum: 100
      },
      {
        name: '中国航发',
        value: (Math.random() * 10).toFixed(0),
        sum: 10
      },
      {
        name: '中国船舶',
        value: (Math.random() * 100).toFixed(0),
        sum: 100
      },
      {
        name: '中国兵工',
        value: (Math.random() * 10).toFixed(0),
        sum: 10
      },
      {
        name: '中国兵装',
        value: (Math.random() * 10).toFixed(0),
        sum: 10
      }, {
        name: '中国电科',
        value: (Math.random() * 100).toFixed(0),
        sum: 100
      },
      {
        name: '中国电子',
        value: (Math.random() * 100).toFixed(0),
        sum: 100
      }
    ];
    let getArrByKey = (data, k) => {
      let key = k || "value";
      let res = [];
      if (data) {
        data.forEach(function (t) {
          res.push(t[key]);
        });
      }
      return res;
    };

    data = data.sort((a, b) => {
      return b.value - a.value
    });

    let option = {
      data: data,
      grid: {
        top: '2%',
        bottom: -15,
        right: 30,
        left: -30,
        containLabel: true
      },
      xAxis: {
        show: false
      },
      yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          align: 'left',
          margin: 80,
          fontSize: 13,
          formatter: function (value) {
            return '{title|' + value + '}'
          },

          rich: {
            title: {
              width: '1%'
            }
          }
        },
      }, {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          align: 'left',
          margin: 20,
          fontSize: 13,
          formatter: function (value, index) {
            return data[index].value
          },
          textStyle: {
            color: function () {
              return '#1E79E3'
            }
          },
        }
      }],
      series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 7,
        itemStyle: {

          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [{
                offset: 0,
                color: '#1e79e3' //柱图渐变色起点颜色
              },
              {
                offset: 1,
                color: '#15b5fc' //柱图渐变色终点颜色
              }
            ]
          ),
          barBorderRadius: 30,
        }
      }]
    }
    return option
  }
}