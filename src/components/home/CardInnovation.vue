<template>
  <div class="my-card my-card-right-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">国防工业创新指数</span>
      <div class="header-arrow text-hide"></div>
    </div>
    <div class="my-card-body">
      <div class="d-flex justify-content-between align-items-center pl-3 pr-2">
        <span class="title">研究开发能力（R&D能力）</span>
        <ChartIndexInnovation1 chartID="chartIndexInvonation1"></ChartIndexInnovation1>
      </div>
      <div class="d-flex justify-content-between align-items-center pl-3 pr-2">
        <span class="title">生产能力</span>
        <ChartIndexInnovation2 chartID="chartIndexInvonation2"></ChartIndexInnovation2>
      </div>
      <div class="d-flex justify-content-between align-items-center pl-3 pr-2">
        <span class="title">投入能力</span>
        <ChartIndexInnovation3 chartID="chartIndexInvonation3"></ChartIndexInnovation3>
      </div>
      <div class="d-flex justify-content-between align-items-center pl-3 pr-2">
        <span class="title">科研成果床照能力</span>
        <ChartIndexInnovation4 chartID="chartIndexInvonation4"></ChartIndexInnovation4>
      </div>
      <div class="d-flex justify-content-between align-items-center pl-3 pr-2">
        <span class="title">人才资源能力</span>
        <ChartIndexInnovation5 chartID="chartIndexInvonation5"></ChartIndexInnovation5>
      </div>
    </div>
  </div>
</template>

<script>
import ChartIndexInnovation1 from './ChartIndexInnovation.vue';
import ChartIndexInnovation2 from './ChartIndexInnovation.vue';
import ChartIndexInnovation3 from './ChartIndexInnovation.vue';
import ChartIndexInnovation4 from './ChartIndexInnovation.vue';
import ChartIndexInnovation5 from './ChartIndexInnovation.vue';

export default {
  name: 'ChartIndexInnovation',
  components: {
    ChartIndexInnovation1,
    ChartIndexInnovation2,
    ChartIndexInnovation3,
    ChartIndexInnovation4,
    ChartIndexInnovation5
  }
};
</script>