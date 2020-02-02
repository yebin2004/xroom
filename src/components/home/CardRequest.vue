<template>
  <div class="my-card my-card-left-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">军民融合需求推荐</span>
      <div
        class="header-arrow text-hide"
        onclick=" window.location.href='requirement'"
      ></div>
    </div>
    <div class="my-card-body py-1 px-2 d-flex flex-column align-items-left">
      <div
        v-for="(item,index) in requiremnetList"
        :key="item.desc"
        v-bind:class="{'my-dark-bg': index % 2 === 0}"
        class="request py-1"
        onclick=" window.location.href='requirement'"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div class="title ">{{item.desc}}</div>
          <div class="icon">
          </div>
        </div>
        <div class="info d-flex justify-content-between align-items-center ">
          <span>{{item.company}}</span><span>{{item.category}}</span>
        </div>
      </div>
      <!--/.request-->
    </div>
  </div>
</template>
<script>
const mockRequirementData = require('../../assets/mock/requirement.json');
export default {
  name: 'cardRequirement',
  data: function() {
    return { requiremnetList: mockRequirementData };
  }
};
</script>