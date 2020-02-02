<template>
  <div class="container bg-white px-0">
    <NavSearch menu-item="军民融合需求推荐"></NavSearch>
    <!--nav-search-->
    <div class="row px-3 ">
      <div class="col-md-12 col-lg-7 px-2 mb-3">
        <CardProject :requ-project="requireProjectData"></CardProject>
      </div>
      <div class="col-md-12 col-lg-5">
        <div class="row">
          <div class="col-md-6 px-2 mb-3">
            <CardRecommend
              card-title="企业推荐"
              :recommend="requireProjectData.enteRecommend"
            ></CardRecommend>
          </div>
          <!--第一列-->
          <div class="col-md-6 px-2 mb-3">
            <CardRecommend
              card-title="产品推荐"
              :recommend="requireProjectData.prodRecommend"
            ></CardRecommend>
          </div>
        </div>
        <!--第一列-->
      </div>
    </div>
  </div>

</template>
<script>
import NavSearch from '../common/NavSearch.vue';
import CardProject from '../requirement/CardProject.vue';
import CardRecommend from '../requirement/CardRecommend.vue';
const mockRequireProjectData = require('../../assets/mock/require-project.json');
export default {
  name: 'enteCredit',
  data: function() {
    return {
      requireProjectData: mockRequireProjectData
    };
  },
  components: {
    NavSearch,
    CardProject,
    CardRecommend
  }
};
</script>
<style scoped src="../../assets/css/requirement.css">
</style>