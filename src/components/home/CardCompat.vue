<template>
  <div class="my-card my-card-right-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">企业竞争力</span>
      <div
        class="header-arrow text-hide"
        onclick=" window.location.href='ente-compat/0'"
      ></div>
    </div>
    <div class="my-card-body">
      <ChartCompat v-bind:chart-data="chartData"></ChartCompat>
    </div>
  </div>
</template>

<script>
import ChartCompat from './ChartCompat.vue';
import { getMaxIncomeList } from '../utils/api';
export default {
  name: 'CardCompat',
  data: function() {
    return {
      chartData: [],
      firstId: null
    };
  },
  mounted: function() {
    getMaxIncomeList({ count: 10 }).then(res => {
      this.setChartData(res.competList);
      this.firstId = res.competList.length > 0 ? res.competList[0].comId : null;
    });
  },
  methods: {
    setChartData: function(competList) {
      let dividend = 1;
      if (competList.length > 0) {
        dividend = Math.pow(10, Math.floor(competList[0].totalIncome).toString().length - 3);
        console.debug('dividend', dividend);
      }
      this.chartData = competList.map(val => {
        return { name: val.shortName, value: Math.floor(val.totalIncome / dividend), id: val.comId };
      });
    }
  },
  components: {
    ChartCompat
  }
};
</script>