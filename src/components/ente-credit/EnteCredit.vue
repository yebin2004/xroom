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
const tempEnterpriseData = require('../../assets/data/enterprise.json');
import { getCompany } from '../utils/api';
export default {
  name: 'enteCredit',
  data: function() {
    return {
      enterpriseData: tempEnterpriseData,
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
      if (res.rmCompany == null) {
        this.$router.push('/404');
      } else {
        this.fillData(res.rmCompany);
      }
    });
  },
  methods: {
    fillData: function(data) {
      let newData = tempEnterpriseData;
      newData.enteName = data.name;
      newData.basic[0].info['社会统一信用代码'] = data.creditCode;
      newData.basic[0].info['公司类型'] = data.econKind;
      newData.basic[0].info['注册资本'] = data.registCapi;
      newData.basic[1].info['组织机构代码'] = data.orgNo;
      newData.basic[1].info['成立日期'] = this.formatDate(data.startDate);
      newData.basic[1].info['发照日期'] = this.formatDate(data.checkDate);
      newData.basic[2].info['注册号'] = data.no;
      newData.basic[2].info['法定代表人'] = data.operName;
      newData.basic[2].info['登记机关'] = data.belongOrg;
      newData.basic[3].info['经营状态'] = data.status;
      newData.basic[3].info['营业期限'] =
        this.formatDate(data.termStart) + '至' + (data.teamEnd == '' ? '无固定期限' : this.formatDate(data.teamEnd));
      newData.basic[3].info['企业地址'] = data.address;
      newData.busiScope = data.scope;
    },
    formatDate: function(date) {
      if (date == '') return;
      return (
        date
          .substring(0, 10)
          .replace('-', '年')
          .replace('-', '月') + '日'
      );
    }
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