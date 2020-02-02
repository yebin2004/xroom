<template>
  <div class="container bg-white px-0">
    <NavSearch menu-item="军民融合大数据"></NavSearch>
    <!--nav-search-->
    <div class="row px-3 my-1 mb-2">
      <div class="col"><span class="main-name">XX地区军民融合发展分析</span></div>
    </div>
    <div class="row px-3 ">
      <div class="col-md-12 mb-3">
        <div class="trend-card shadow py-4 ">
          <ChartInteTrend></ChartInteTrend>
          <div class="chart-common-title text-center mt-4">当地政府军民融合发展趋势图</div>
        </div>
      </div>
    </div>
    <!--大趋势图-->
    <div class="row px-3 ">
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartGDPPie></ChartGDPPie>
          <div class="chart-common-title text-center text-truncate mt-4 px-1">军民融合企业创收占当地GDP比重
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartDepartTree></ChartDepartTree>
          <div class="chart-common-title text-center text-truncate mt-4 px-1">军民融合相关部门
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <CardPolicy></CardPolicy>
      </div>
    </div>
    <!--小图行一-->
    <div class="row px-3">
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartCirclePie></ChartCirclePie>
          <div class="chart-common-title text-center mt-4">民参军指数
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartRosePie></ChartRosePie>
          <div class="chart-common-title text-center mt-4">军转民指数
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartGraph v-bind:indexes="indexData"></ChartGraph>
          <div class="chart-common-title text-center mt-4">军民融合指数
          </div>
        </div>
      </div>
    </div>
    <!--小图行二-->
  </div>
</template>

<script>
import NavSearch from '../common/NavSearch.vue';
import ChartInteTrend from './ChartInteTrend.vue';
import ChartGDPPie from './ChartGDPPie.vue';
import ChartDepartTree from './ChartDepartTree.vue';
import CardPolicy from './CardPolicy.vue';
import ChartCirclePie from './ChartCirclePie.vue';
import ChartRosePie from './ChartRosePie.vue';
import ChartGraph from '../common/ChartGraph.vue';
const mockIndexData = require('../../assets/mock/integration-index.json');
export default {
  name: 'integration',
  data: function() {
    return { indexData: mockIndexData };
  },
  components: {
    NavSearch,
    ChartInteTrend,
    ChartGDPPie,
    ChartDepartTree,
    CardPolicy,
    ChartCirclePie,
    ChartRosePie,
    ChartGraph
  },
  methods: {},
  mounted: function() {}
};
</script>
<style scoped>
.chart-common-title {
  font-size: 0.8893rem;
  color: #999;
}

.chart-common-box {
  height: 12.4505rem;
  width: 100%;
}

.chart-common-title {
  font-size: 0.8893rem;
  color: #333;
}
</style>
