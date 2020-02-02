<template>
  <div class="my-card my-card-right-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">企业信用</span>
      <div
        class="header-arrow text-hide"
        onclick=" window.location.href='ente-credit'"
      ></div>
    </div>
    <div class="my-card-body">
      <ChartCredit v-bind:chart-data="chartData"></ChartCredit>
    </div>
  </div>
</template>

<script>
import ChartCredit from './ChartCredit.vue';
import optionUtil from '../utils/chart-option';
export default {
  name: 'cardCredit',
  data: function() {
    return {
      chartData: []
    };
  },
  mounted: function() {
    this.chartData = optionUtil.createChartData();
  },
  components: {
    ChartCredit
  }
};
</script>