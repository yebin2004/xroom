<template>
  <div class="container bg-white px-0">
    <NavSearch menu-item="国防工业创新指数"></NavSearch>
    <!--nav-search-->
    <div class="row px-3 my-1 mb-2">
      <div class="col"><span class="main-name">XX地区军民融合发展分析</span></div>
    </div>
    <div class="row px-3 ">
      <div class="col-md-12 mb-3">
        <div class="trend-card shadow py-4">
          <ChartTrend v-bind:chart-data="trendData"></ChartTrend>
          <div class="chart-common-title text-center mt-4">当地政府国防工业创新趋势图</div>
        </div>
      </div>
    </div>
    <!--大趋势图-->
    <div class="row px-3">
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartRDArea></ChartRDArea>
          <div class="chart-common-title text-center mt-4">研究开发能力
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartPCArea></ChartPCArea>
          <div class="chart-common-title text-center mt-4">生产能力
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartInvestBar></ChartInvestBar>
          <div class="chart-common-title text-center mt-4">投入能力
          </div>
        </div>
      </div>
    </div>
    <!--小图行一-->
    <div class="row px-3">
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartCirclePie></ChartCirclePie>
          <div class="chart-common-title text-center mt-4">人才资源能力
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartRosePie></ChartRosePie>
          <div class="chart-common-title text-center mt-4">成果能力
          </div>
        </div>
      </div>
      <div class="col-md-4 my-3">
        <div class="chart-card shadow py-4">
          <ChartGraph v-bind:indexes="indexData"></ChartGraph>
          <div class="chart-common-title text-center mt-4">创新指数
          </div>
        </div>
      </div>
    </div>
    <!--小图行二-->
  </div>
</template>

<script>
import NavSearch from '../common/NavSearch.vue';
import ChartTrend from '../common/ChartTrend.vue';
import ChartRDArea from '../innovation/ChartRDArea.vue';
import ChartPCArea from '../innovation/ChartPCArea.vue';
import ChartInvestBar from '../innovation/ChartInvestBar.vue';
import ChartCirclePie from '../integration/ChartCirclePie.vue';
import ChartRosePie from '../integration/ChartRosePie.vue';
import ChartGraph from '../common/ChartGraph.vue';
const mockTrendData = require('../../assets/mock/innovation-trend.json');
const mockIndexData = require('../../assets/mock/innovation-index.json');
export default {
  name: 'integration',
  data: function() {
    return {
      trendData: mockTrendData,
      indexData: mockIndexData
    };
  },
  components: {
    NavSearch,
    ChartTrend,
    ChartRDArea,
    ChartPCArea,
    ChartInvestBar,
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
