<template>
  <div class="my-card my-card-middle-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">参军企业和军费支出增长趋势图</span>
      <div class="header-arrow text-hide"></div>
    </div>
    <!--/.card-header-->
    <div class="my-card-body py-2 pl-2 pr-1">
      <ChartTrend v-bind:chart-data="chartData"></ChartTrend>
    </div>
  </div>
</template>
<script>
import ChartTrend from './ChartTrend.vue';
const mockTrendData = require('../../assets/mock/ente-mili-trend.json');
export default {
  name: 'cardTrend',
  data: function() {
    return {
      chartData: mockTrendData
    };
  },
  components: {
    ChartTrend
  }
};
</script>