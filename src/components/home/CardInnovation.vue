<template>
  <div class="my-card my-card-right-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">国防工业创新指数</span>
      <div
        class="header-arrow text-hide"
        onclick=" window.location.href='innovation'"
      ></div>
    </div>
    <div class="my-card-body">
      <div
        class="d-flex justify-content-between align-items-center pl-3 pr-2"
        v-for="(item,index) in capabilityData"
        :key="item.name"
      >
        <span class="title">{{item.name}}</span>
        <ChartIndexInnovation
          v-bind:chart-data="chartData[index]"
          onclick=" window.location.href='innovation'"
        ></ChartIndexInnovation>
      </div>
    </div>
  </div>
</template>

<script>
import ChartIndexInnovation from './ChartIndexInnovation.vue';

const mockCapabilityData = require('../../assets/mock/rd-capability.json');
export default {
  name: 'cardIndexInnovation',
  data: function() {
    return {
      capabilityData: mockCapabilityData
    };
  },
  computed: {
    chartData: function() {
      return this.capabilityData.map((value, index) => {
        return { chartID: 'chart' + index, dataIndex: value.value };
      });
    }
  },
  components: {
    ChartIndexInnovation
  }
};
</script>