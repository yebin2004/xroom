<template>
  <div class="ente-card subject-card shadow py-4 px-3">
    <div class="ente-card-header d-flex justify-content-between align-items-center mb-1">
      <div class="ente-label">{{cardTitle}}</div>
      <div class="sub-label">更多</div>
    </div>
    <div class="subject-card-list d-flex flex-column">
      <div
        class="row py-2 icon-title-info"
        v-for="item in newsList"
        :key="item.id"
      >
        <div class="col-9 col-sm-10 pr-1 icon-title">
          {{item.title}}
        </div>
        <div class="col-3 col-sm-2 pl-1 info text-right text-nowrap">{{item.postTime.substring(5,16)}}</div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'cardNews',
  props: { cardTitle: String, newsList: Array }
};
</script>

<style  scoped src="../../assets/css/ente-credit.css">
</style>