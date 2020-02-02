<template>
  <div
    id="chartIndexAbility"
    class="py-2 chart-right"
  ></div>
</template>

<script>
import optionUtil from '../utils/chart-option';
export default {
  name: 'chartIndexAbility',
  data: function() {
    return {};
  },
  mounted: function() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      let option = optionUtil.setOptionData(this.$echarts);

      var chartIndexAbility = this.$echarts.init(document.getElementById('chartIndexAbility'));
      chartIndexAbility.setOption(option);

      window.addEventListener('resize', () => {
        chartIndexAbility.resize();
      });
    }
  }
};
</script>