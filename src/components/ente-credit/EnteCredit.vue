<template>
  <div class="container bg-white px-0">
    <NavSearch
      menu-item="企业信用指数"
      v-bind:show-search="false"
    ></NavSearch>
    <!--nav-search-->
    <div class="d-flex justify-content-between align-items-center px-3 my-1">
      <div class="ente-name">{{enterpriseData.enteName}}</div>
      <div><span class="ente-label d-inline-block mr-2">企业综合评分</span><span class="ente-rating d-inline-block text-center py-1 px-2">{{enterpriseData.enteRating}}</span></div>
    </div>
    <div class="row px-3 my-3">
      <div class="col-md-12 ">
        <CardBasic
          :basic-data="enterpriseData.basic"
          :busi-scope="enterpriseData.busiScope"
        ></CardBasic>
      </div>
    </div>
    <div class="row px-3 ">
      <div class="col-md-6 my-3">
        <CardShareholder :sh-list="enterpriseData.shareholders"></CardShareholder>
      </div>
      <div class="col-md-6 my-3">
        <CardMember :member-list="enterpriseData.members"></CardMember>
      </div>
      <div class="w-100"> </div>
      <div class="col-md-6 my-3">
        <CardNews
          card-title="经营信息"
          :news-list="enterpriseData.goodNews"
        ></CardNews>
      </div>
      <div class="col-md-6 my-3">
        <CardNews
          card-title="风险信息"
          :news-list="enterpriseData.badNews"
        ></CardNews>
      </div>
      <div class="w-100"> </div>
      <div class="col-md-6 my-3">
        <ChartIPCircle :ip-list="enterpriseData.ip"></ChartIPCircle>
      </div>
    </div>
  </div>
</template>
<script>
import NavSearch from '../common/NavSearch.vue';
import CardBasic from './CardBasic.vue';
import CardShareholder from './CardShareholder.vue';
import CardMember from './CardMember.vue';
import CardNews from './CardNews.vue';
import ChartIPCircle from './ChartIPCircle.vue';
import { getCompany } from '../utils/api';
export default {
  name: 'EnteCredit',
  data: function() {
    return {
      enterpriseData: {},
      companyName: this.$store.state.companyName
    };
  },
  components: {
    NavSearch,
    CardBasic,
    CardShareholder,
    CardMember,
    CardNews,
    ChartIPCircle
  },
  mounted: function() {
    console.debug('companyName', this.$store.state);
    getCompany({ name: this.companyName }).then(res => {
      this.enterpriseData = res;
    });
  }
};
</script>
<style scoped>
.ente-name {
  font-size: 1.0672rem;
  color: #666;
}

.ente-label {
  color: #007fff;
  font-size: 0.8893rem;
}

.ente-rating {
  background-color: #2db200;
  color: #fff;
  font-size: 0.8893rem;
}
</style>