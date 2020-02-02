<template>
  <div class="requ-card shadow py-3 px-3">
    <div class="requ-label">军方需求项目</div>
    <div class="d-flex align-items-center justify-content-between my-3">
      <div class="project-name">{{requProject.projectName}}</div>
      <div class="project-info ml-3">
        <div class="project-budget text-nowrap text-right">{{requProject.projectBudget}}</div>
        <div class="project-date text-nowrap text-right">{{requProject.projectDate}}</div>
      </div>
    </div>
    <div class="project-content">
      <span v-html="requProject.projectContent"></span>
    </div>
    <div class="py-1"><span class="project-label ">所属军种</span><span>{{requProject.type}}</span></div>
    <div class="py-1"><span class="project-label">所属领域</span><span>{{requProject.area}}</span></div>
    <div class="py-1"><span class="project-label">联系方式</span><span>{{requProject.contact}}</span></div>
    <div class="py-1"><span class="project-label">所在地区</span><span>{{requProject.region}}</span></div>
  </div>
</template>
<script>
export default {
  name: 'cardProject',
  props: { requProject: Object }
};
</script>

<style scoped src="../../assets/css/requirement.css">
</style>