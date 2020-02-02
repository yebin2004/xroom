<template>
  <div class="compat-card ente-compat-card d-flex flex-column p-3">
    <div class="compat-card-title pb-2">{{enteCompatData.name + enteCompatData.code}}</div>
    <div
      class="compat-card-item d-flex justify-content-between align-items-center"
      v-for="item in enteCompatData.items"
      :key="item.name"
    ><span class="item-name">{{item.name}}</span><span class="item-number">{{item.value == null ? '未定' : item.value.toLocaleString()}}</span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'cardEnteValue',
  props: {
    enteCompatData: Object
  },
  methods: {}
};
</script>
<style scoped src="../../assets/css/compat.css">
</style>