<template>
  <div
    id="chartDepartmentTree"
    class="chart-common-box "
  ></div>
</template>

<script>
const mockDepartmentData = require('../../assets/mock/department.json');
export default {
  name: 'chartDepartmentTree',
  data: function() {
    return {
      departmentData: mockDepartmentData
    };
  },
  mounted: function() {
    this.initChart(this.departmentData);
  },
  methods: {
    initChart: function(departmentData) {
      var data2 = departmentData;

      let option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        title: {
          text: '军民融合主管部门',
          x: 'center',
          textStyle: {
            color: '#333333',
            fontSize: 13
          }
        },
        series: [
          {
            type: 'tree',
            name: 'tree2',
            data: [data2],

            left: '2%',
            right: '2%',
            top: '15%',
            bottom: '24%',
            orient: 'vertical',
            symbolSize: 7,

            label: {
              normal: {
                position: 'bottom',
                verticalAlign: 'right',
                align: 'middle',
                formatter: param => {
                  let name = param.data.name;
                  if (name.length >= 10) {
                    name = name.slice(0, 9) + '...';
                  }
                  name = name.split('').join('\n');
                  return name;
                }
              }
            },

            leaves: {
              label: {
                normal: {
                  position: 'bottom',
                  verticalAlign: 'right',
                  align: 'middle',
                  formatter: param => {
                    let name = param.data.name;
                    if (name.length >= 10) {
                      name = name.slice(0, 9) + '...';
                    }
                    name = name.split('').join('\n');
                    return name;
                  }
                }
              }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };
      var chartDepartmentTree = this.$echarts.init(document.getElementById('chartDepartmentTree'));
      chartDepartmentTree.setOption(option);

      window.addEventListener('resize', () => {
        chartDepartmentTree.resize();
      });
    }
  }
};
</script>
