<template>
  <div class="chart-card shadow py-4">
    <div class="chart-card-header d-flex justify-content-between align-items-center px-3">
      <div class="chart-header-title">专项政策</div>
      <div class="more">更多</div>
    </div>
    <div class="chart-card-list d-flex flex-column px-3 pt-2">
      <div
        class="row icon-title-info py-1"
        v-for="item in policyList"
        :key="item.id"
      >
        <div class="col-9 icon-title pr-1">
          {{item.title}}
        </div>
        <div class="col-3 info text-right pl-1">{{item.area}}/{{item.postDate}}</div>
      </div>
    </div>
  </div>
</template>
<script>
const mockPolicyData = require('../../assets/mock/policy.json');
export default {
  data: function() {
    return {
      policyList: mockPolicyData
    };
  }
};
</script>
<style scoped>
.chart-card {
  height: 18.2625rem;
}

.chart-card-header .more {
  font-size: 0.7115rem;
  color: #999;
}
</style>