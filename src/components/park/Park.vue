<template>
  <div class="container bg-white px-0">
    <NavSearch
      menu-item="产业园区"
      @search="searchParkAction"
    ></NavSearch>
    <!--nav-search-->
    <div class="row px-3 ">
      <div class="col-md-12 col-lg-7 px-2 mb-3">
        <div class="requ-card shadow py-3 px-3">
          <div class="requ-label">{{mapTitle}}</div>
          <ChartProvince
            v-bind:park-info="park"
            @clickOther="getParkAction"
            v-bind="$attrs"
            v-on="$listeners"
          ></ChartProvince>
        </div>
      </div>
      <!--左侧-->
      <div class="col-md-12 col-lg-5 ">
        <div class="row">
          <div class="col-md-6 px-2 mb-3">
            <CardIntroduction v-bind:park-info="park"></CardIntroduction>
          </div>
          <div class="col-md-6 px-2">
            <CardSupporting></CardSupporting>
            <CardPolicy></CardPolicy>
            <CardMatch></CardMatch>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import NavSearch from '../common/NavSearch.vue';
import ChartProvince from '../park/ChartProvince.vue';
import CardIntroduction from '../park/CardIntroduction.vue';
import CardSupporting from '../park/CardSupporting.vue';
import CardPolicy from '../park/CardPolicy.vue';
import CardMatch from '../park/CardMatch.vue';
import { getPark, searchPark } from '../utils/api';
import { loading } from '../common/mixin/loading';
export default {
  name: 'Park',
  mixins: [loading],
  data: function() {
    return {
      parkId: null,
      park: {},
      province: '',
      oldProvince: ''
    };
  },
  components: {
    NavSearch,
    ChartProvince,
    CardIntroduction,
    CardSupporting,
    CardPolicy,
    CardMatch
  },
  computed: {
    mapTitle: function() {
      let result = this.province != '' ? this.province + (this.park.parkName ? '—' + this.park.parkName : '') : '';
      return result == '' ? '主要产业园区' : result;
    }
  },
  mounted: function() {
    let parkId = this.$route.params.parkId;
    if (parkId == 0) {
      this.searchParkAction('');
    } else {
      this.getParkAction(parkId);
    }
  },
  methods: {
    searchParkAction: function(val) {
      this.doParkAction('search', val);
    },
    getParkAction: function(parkId) {
      if (this.parkId == parkId) return;
      this.doParkAction('get', parkId);
    },

    doParkAction: function(type, param) {
      this.setLoading(true);
      let promise = null;
      if (type === 'search') {
        promise = searchPark({ key: param });
      } else {
        promise = getPark({ parkId: param });
      }
      this.oldProvince = this.province;
      promise
        .then(res => {
          this.parkId = res.parkId;
          this.park = res.rmPark;
          this.province = res.rmPark.province;
        })
        .finally(() => {
          if (this.oldProvince === this.province) this.setLoading(false);
        });
    }
  }
};
</script>
<style scoped src="../../assets/css/park.css">
</style>