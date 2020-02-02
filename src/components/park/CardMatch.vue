<template>
  <div class="requ-card shadow py-3  px-3">
    <div class="requ-label align-self-auto mb-2">匹配度</div>
    <div
      class="match-item d-flex align-items-center mt-1 mb-3"
      v-for="item in parkInfo.mockParkInfo"
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
    <div class="match-item d-flex align-items-center my-3">
      <img
        class="mr-1"
        src="../../assets/img/placeholder40x40.png"
      >
      <div class="row w-100">
        <div class="col-12 match-name">无锡市群名钢材新材料新材料有限公司</div>
        <div class="col-12 info d-flex justify-content-between">
          <span class="">新材料</span><span class="match-value ">82.3</span>
        </div>
      </div>
    </div>
    <div class="match-item d-flex align-items-center my-3">
      <img
        class="mr-1"
        src="../../assets/img/placeholder40x40.png"
      >
      <div class="row w-100">
        <div class="col-12 match-name">江苏程普化工制品有限公司</div>
        <div class="col-12 info d-flex justify-content-between">
          <span class="">化工</span><span class="match-value ">88.7</span>
        </div>
      </div>
    </div>
    <div class="match-item d-flex align-items-center my-3">
      <img
        class="mr-1"
        src="../../assets/img/placeholder40x40.png"
      >
      <div class="row w-100">
        <div class="col-12 match-name">无锡市群名钢材新材料新材料有限公司</div>
        <div class="col-12 info d-flex justify-content-between">
          <span class="">新材料</span><span class="match-value ">82.3</span>
        </div>
      </div>
    </div>
    <div class="match-item d-flex align-items-center mt-3 mb-1">
      <img
        class="mr-1"
        src="../../assets/img/placeholder40x40.png"
      >
      <div class="row w-100">
        <div class="col-12 match-name">无锡市群名钢材新材料新材料有限公司</div>
        <div class="col-12 info d-flex justify-content-between">
          <span class="">新材料</span><span class="match-value ">82.3</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const mockParkInfo = require('../../assets/mock/park-info.json');
export default {
  name: 'cardMatch',
  data: function() {
    return {
      parkInfo: mockParkInfo
    };
  }
};
</script>
<style scoped src="../../assets/css/park.css">
</style>