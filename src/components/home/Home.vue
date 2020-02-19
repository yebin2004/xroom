<template>
  <main role="main">
    <div class="container-fluid">
      <div class="top-banner text-hide"></div>
      <div class="row">
        <div class="col-lg-6 order-lg-2">
          <div class="align-items-center my-header-title row mt-3">
            <div class="col-auto  p1-0">军民融合大数据（2018）</div>
            <div
              class="header-arrow text-hide col-1"
              onclick=" window.location.href='integration'"
            ></div>
          </div>
          <!--/.中间-上部-->
          <div class="row mb-2">
            <div class="col-sm-3 pr-1">
              <CardBigNumber></CardBigNumber>
            </div>
            <!--/.数据大字-->
            <div class="col-sm-9 px-1">
              <MapChina>
              </MapChina>
            </div>
            <!--/.地图-->
          </div>
          <!--/.中间-中部-->
          <div class="row">
            <div class="col-sm-5 mb-2 px-1">
              <CardPark></CardPark>
            </div>
            <!--/.中间-下部-左边-->
            <div class="col-sm-7 mb-2 px-1">
              <CardTrend></CardTrend>
            </div>
            <!--/.中间-下部-右边-->
          </div>
          <!--/.中间-下部-->
        </div>
        <!--/.中间-->
        <div class="col-lg-2 order-lg-1">
          <div class="row">
            <div class="col-lg-12 col-sm-6 mb-2 px-1">
              <CardPaper></CardPaper>
            </div>
            <!--/左边-上部-战略规划库-->
            <div class="col-lg-12 col-sm-6 px-1">
              <CardRequest></CardRequest>
            </div>
            <!--/左边-下部-需求推荐-->
          </div>
        </div>
        <!--/.左边-->
        <div class="col-lg-4 order-lg-3">
          <div class="row">
            <div class="col-sm-6  mb-2 px-1 ">
              <CardAbility></CardAbility>
            </div>
            <!--/.右边-上部-左-->
            <div class="col-sm-6  mb-2 px-1 ">
              <CardInnovation></CardInnovation>
            </div>
            <!--/.右边-上部-右-->
            <div class="w-100"></div>
            <!--/.右边-上部-->
            <div class="col-sm-6  mb-2 px-1 ">
              <CardCompat></CardCompat>
            </div>
            <!--/.右边-下部-左-->
            <div class="col-sm-6  mb-2 px-1 ">
              <CardCredit></CardCredit>
            </div>
            <!--/.右边-下部-右-->
          </div>
        </div>
        <!--/.右边-->
      </div>
    </div>
    <Toasts
      :show-progress="true"
      :rtl="false"
      :max-messages="5"
      :time-out="3000"
      :closeable="true"
    ></Toasts>
  </main>
</template>
<script>
import CardPaper from './CardPaper.vue';
import CardRequest from './CardRequest.vue';
import CardBigNumber from './CardBigNumber.vue';
import MapChina from './MapChina.vue';
import CardPark from './CardPark.vue';
import CardTrend from './CardTrend.vue';
import CardAbility from './CardAbility.vue';
import CardInnovation from './CardInnovation.vue';
import CardCompat from './CardCompat.vue';
import CardCredit from './CardCredit.vue';

import BgHome from '../../assets/img/bg_home.jpg';
export default {
  name: 'App',
  components: {
    CardPaper,
    CardRequest,
    CardBigNumber,
    MapChina,
    CardPark,
    CardTrend,
    CardAbility,
    CardInnovation,
    CardCompat,
    CardCredit
  },
  mounted: function() {
    let that = this;
    window.onresize = () => {
      return that.setBg();
    };
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style['background-color'] = '#01204f';
    next(vm => {
      vm.setBg();
    });
  },
  methods: {
    setBg: function() {
      /* if (window.innerWidth > 991.98) {
        window.document.body.style.background = 'url(' + BgHome + ') center center/100%  no-repeat fixed';
      } else {
        window.document.body.style.background = 'url(' + BgHome + ') center center/auto 100%  no-repeat fixed';
      } */
      window.document.body.style.background = 'url(' + BgHome + ') center center/cover  no-repeat fixed #01204f';
    }
  }
};
</script>
<style scoped>
body {
  background-color: #01204f;
}
</style>


