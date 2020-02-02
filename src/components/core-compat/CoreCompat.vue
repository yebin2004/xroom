<template>
  <div class="container bg-white px-0">
    <NavSearch menu-item="企业国防核心能力指数"></NavSearch>
    <!--nav-search-->
    <div class="row px-3 my-1 mb-2">
      <div class="col"><span class="main-name">中国核工业集团有限公司（中核集团）</span></div>
    </div>
    <div class="row px-5 mx-5 mt-4 mb-1 w-75 mx-auto">
      <div
        class="col-6 col-md-3 py-1"
        v-for="(item,index) in coreCompatList"
        :key="item.id"
      >
        <div class="new-main-index d-flex flex-column align-items-center justify-content-center mb-3">
          <span
            class="main-index-number "
            :class="index % 2 === 0 ? 'main-index-number-a': 'main-index-number-b'"
          >{{item.index}}</span><span class="main-index-name mt-1">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="row mx-1 px-lg-5 mx-lg-5 mb-4">
      <div
        class="col-6 col-md-3 py-1"
        v-for="item in coreCompatList"
        :key="item.id"
      >
        <CardCompat v-bind:core-compat-data="item"></CardCompat>
      </div>
    </div>
  </div>
</template>
<script>
import NavSearch from '../common/NavSearch.vue';
import CardCompat from './CardCompat.vue';
const mockCoreCompatData = require('../../assets/mock/core-compat.json');
export default {
  name: 'coreCompate',
  data: function() {
    return {
      coreCompatList: mockCoreCompatData
    };
  },
  components: {
    NavSearch,
    CardCompat
  }
};
</script>
<style scoped src="../../assets/css/compat.css">
</style>
