<template>
  <div class="compat-card d-flex flex-column mt-3 p-3">
    <div class="compat-card-title pb-2">{{coreCompatData.name}}</div>
    <div
      class="compat-card-item d-flex justify-content-between align-items-center"
      v-for="item in coreCompatData.items"
      :key="item.name"
    ><span class="item-name">{{item.name}}</span><span class="item-number">{{item.value}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cardCompat',
  props: {
    coreCompatData: Object
  }
};
</script>
<style scoped src="../../assets/css/compat.css">
</style>