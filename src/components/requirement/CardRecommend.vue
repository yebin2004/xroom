<template>
  <div class="requ-card shadow py-3">
    <div class="requ-label align-self-auto mb-2 px-3">{{cardTitle}}</div>
    <div
      class="match-item d-flex align-items-center px-2 my-3"
      v-for="item in recommend"
      :key="item.matchName"
    >
      <img
        class="mr-1"
        src="../../assets/img/placeholder40x40.png"
      >
      <div class="row w-100">
        <div class="col-12 match-name">{{item.matchName}}</div>
        <div class="col-12 info d-flex justify-content-between">
          <span class="">{{item.area}}</span><span class="match-value ">{{item.matchValue}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cardRecommend',
  props: { cardTitle: String, recommend: Array }
};
</script>

<style scoped src="../../assets/css/requirement.css">
</style>