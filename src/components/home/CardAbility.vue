<template>
  <div class="my-card my-card-right-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">企业国防核心能力指数</span>
      <div class="header-arrow text-hide"></div>
    </div>
    <div class="my-card-body">
      <ChartIndexAbility></ChartIndexAbility>
    </div>
  </div>
</template>

<script>
import ChartIndexAbility from './ChartIndexAbility.vue';
export default {
  name: 'ChartAbilityIndex',
  components: {
    ChartIndexAbility
  }
};
</script>