<template>
  <div class="d-flex flex-column ">
    <div class="my-big-title mt-3">
      全国参军企业数据
    </div>
    <div class="my-big-number-green">
      28,530
    </div>
    <div class="my-big-title mt-5">
      全国参军企业科研支出
    </div>
    <div class="my-big-number-blue">
      9,356
    </div>
    <div class="my-big-title mt-5">
      军民融合企业营收占GDP比重
    </div>
    <ChartGDP></ChartGDP>
  </div>
</template>

<script>
import ChartGDP from './ChartGDP.vue';
export default {
  name: 'CardBigNumber',
  components: {
    ChartGDP
  }
};
</script>