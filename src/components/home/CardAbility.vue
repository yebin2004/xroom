<template>
  <div class="my-card my-card-right-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">企业国防核心能力指数</span>
      <div
        class="header-arrow text-hide"
        onclick=" window.location.href='core-compat'"
      ></div>
    </div>
    <div class="my-card-body">
      <ChartIndexAbility v-bind:chart-data="chartData"></ChartIndexAbility>
    </div>
  </div>
</template>

<script>
import ChartIndexAbility from './ChartIndexAbility.vue';
import optionUtil from '../utils/chart-option';
export default {
  name: 'cardAbility',
  data: function() {
    return {
      chartData: []
    };
  },
  mounted: function() {
    this.chartData = optionUtil.createChartData();
  },
  components: {
    ChartIndexAbility
  }
};
</script>