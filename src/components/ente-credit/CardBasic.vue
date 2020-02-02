<template>
  <div class="ente-card shadow py-4 p-3 pr-lg-5">
    <div class="ente-label">工商信息</div>
    <div
      class="row py-1"
      v-for="item in basicData"
      :key="item.id"
    >
      <template v-for="(value, name, index) in item.info">
        <div
          :key="name"
          class="ente-info-label col-4 text-right pr-0"
          :class="index === 0 ? 'col-md-2' : 'col-md-1'"
        >{{name}}</div>
        <div
          :key="name + 1"
          class="col-8 col-md-2 text-left text-wrap pl-1"
          :class="index === 0 ? 'col-md-2' : 'col-md-3'"
        >{{value}}</div>
      </template>
    </div>
    <div class="row py-1">
      <div class="ente-info-label col-4 col-md-2 text-right pr-0">经营范围</div>
      <div class="business-scope col-8 col-md-10 text-left pl-1">
        {{busiScope}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cardBasic',
  props: { basicData: Array, busiScope: String }
};
</script>

<style  scoped src="../../assets/css/ente-credit.css">
</style>