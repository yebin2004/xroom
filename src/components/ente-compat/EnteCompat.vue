<template>
  <div class="container bg-white px-0">
    <NavSearch
      menu-item="企业竞争力"
      @search="searchCompetAction"
    ></NavSearch>
    <!--nav-search-->
    <div class="row px-3 my-1 mb-2">
      <div class="col"><span class="main-name">{{comName}}</span></div>
    </div>
    <div class="row px-5 mx-5 mt-4 mb-1">
      <div
        class="col-6 col-sm-4 col-md-2 py-1"
        v-for="(item,index) in enteCompatList"
        :key="item.id"
      >
        <div class="new-main-index d-flex flex-column align-items-center justify-content-center mb-3">
          <span
            class="main-index-number"
            :class="index % 2 === 0 ? 'main-index-number-a': 'main-index-number-b'"
          >{{item.index}}</span><span class="main-index-name">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="row px-5 mx-5">
      <div
        class="col-md-4 py-1 px-1"
        v-for="item in enteCompatList"
        :key="item.id"
      >
        <CardEnteValue v-bind:ente-compat-data="item"></CardEnteValue>
      </div>
    </div>
  </div>
</template>
<script>
import NavSearch from '../common/NavSearch.vue';
import CardEnteValue from '../ente-compat/CardEnteValue.vue';
const mockEnteCompatData = require('../../assets/mock/ente-compat.json');
import { getCompet, searchCompet } from '../utils/api';
import { loading } from '../common/mixin/loading';
export default {
  name: 'EnteCompat',
  mixins: [loading],
  data: function() {
    return {
      comId: null,
      comName: '',
      enteCompatList: mockEnteCompatData,
      competIndex: []
    };
  },
  components: {
    NavSearch,
    CardEnteValue
  },
  mounted: function() {
    let comId = this.$route.params.comId;
    if (comId == 0) {
      this.searchCompetAction('');
    } else {
      this.getCompetAction(comId);
    }
  },
  methods: {
    searchCompetAction: function(val) {
      this.doCompetAction('search', val);
    },
    getCompetAction: function(comId) {
      if (this.comId == comId) return;
      this.doCompetAction('get', comId);
    },

    doCompetAction: function(type, param) {
      this.setLoading(true);
      let promise = null;
      if (type === 'search') {
        promise = searchCompet({ key: param });
      } else {
        promise = getCompet({ comId: param });
      }
      promise
        .then(res => {
          console.debug('res', res);
          if (res.rmCompet == null) {
            this.nofound = true;
          } else {
            this.comId = res.rmCompet.comId;
            this.comName = res.rmCompet.comName;
            this.compet = this.assemCompet(res.rmCompet);
            this.$store.dispatch('CompanyName', this.comName);
            console.debug('companyNameset', this.$store.state);
          }
        })
        .finally(() => {
          this.setLoading(false);
          if (this.nofound) this.$router.push('/404');
        });
    },
    assemCompet: function(rmCompet) {
      this.enteCompatList[0].items[3].value = rmCompet.workerNumber;
      this.enteCompatList[3].items[1].value = rmCompet.salesExpenses;
      //this.compet[4].items[0] = rmCompet.tecStaffProportion;
    }
  }
};
</script>
<style scoped src="../../assets/css/compat.css">
</style>