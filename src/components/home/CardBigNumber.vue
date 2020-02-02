<template>
  <div class="d-flex flex-column ">
    <div class="my-big-title text-nowrap mt-3">
      全国参军企业数据
    </div>
    <div class="my-big-number-green text-nowrap">
      {{enteNumber.toLocaleString()}}
    </div>
    <div class="my-big-title text-nowrap mt-5">
      全国参军企业科研支出
    </div>
    <div class="my-big-number-blue text-nowrap">
      {{rdCost.toLocaleString()}}
    </div>
    <div class="my-big-title text-nowrap mt-5">
      军民融合企业营收占GDP比重
    </div>
    <ChartGDP v-bind:proportion="proportion"></ChartGDP>
  </div>
</template>

<script>
import ChartGDP from './ChartGDP.vue';
export default {
  name: 'cardBigNumber',
  data: function() {
    return {
      enteNumber: 0,
      rdCost: 0,
      proportion: 0
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.enteNumber = 28530;
      this.rdCost = 9356;
      this.proportion = 35;
    }
  },
  components: {
    ChartGDP
  }
};
</script>