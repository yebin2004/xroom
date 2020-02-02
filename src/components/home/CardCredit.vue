<template>
  <div class="my-card my-card-right-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">企业信用</span>
      <div class="header-arrow text-hide"></div>
    </div>
    <div class="my-card-body">
      <ChartCredit></ChartCredit>
    </div>
  </div>
</template>

<script>
import ChartCredit from './ChartCredit.vue';
export default {
  name: 'ChartAbilityIndex',
  components: {
    ChartCredit
  }
};
</script>