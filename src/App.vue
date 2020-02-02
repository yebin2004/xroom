<template>
  <main role="main">
    <div class="container-fluid">
      <div class="top-banner text-hide"></div>
      <div class="row">
        <div class="col-md-2 ">
          <div class="row">
            <div class="col-12 px-1">
              <CardPaper></CardPaper>
            </div>
            <!--/左边-上部-战略规划库-->
            <div class="w-100 mt-2"></div>
            <div class="col-12 px-1">
              <CardRequest></CardRequest>
            </div>
            <!--/左边-下部-需求推荐-->
          </div>
        </div>
        <!--/.左边-->
        <div class="col-md-6">
          <div class="align-items-center my-header-title row mt-3">
            <div class="col-auto  p1-0">军民融合大数据（2018）</div>
            <div class="header-arrow text-hide col-1"></div>
          </div>
          <!--/.中间-上部-->
          <div class="row mb-2">
            <div class="col-md-3 pr-1">
              <CardBigNumber></CardBigNumber>
            </div>
            <!--/.数据大字-->
            <div class="col-md-9 px-1">
              <MapChina>
              </MapChina>
            </div>
            <!--/.地图-->
          </div>
          <!--/.中间-中部-->
          <div class="row">
            <div class="col-md-5 px-1">
              <CardPark></CardPark>
            </div>
            <!--/.中间-下部-左边-->
            <div class="col-md-7 px-1">
              <CardTrend></CardTrend> -->
            </div>
            <!--/.中间-下部-右边-->
          </div>
          <!--/.中间-下部-->
        </div>
        <!--/.中间-->
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-6 px-1 ">
              <CardAbility></CardAbility>
            </div>
            <!--/.右边-上部-左-->
            <div class="col-md-6 px-1 ">
              <CardInnovation></CardInnovation>
            </div>
            <!--/.右边-上部-右-->
            <div class="w-100 mt-2"></div>
            <!--/.右边-上部-->
            <div class="col-md-6 px-1 ">
              <CardCompat></CardCompat>
            </div>
            <!--/.右边-下部-左-->
            <div class="col-md-6 px-1 ">
              <CardCredit></CardCredit>
            </div>
            <!--/.右边-下部-右-->
          </div>
        </div>
        <!--/.右边-->
      </div>
    </div>
  </main>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CardPaper from './components/home/CardPaper.vue';
import CardRequest from './components/home/CardRequest.vue';
import CardBigNumber from './components/home/CardBigNumber.vue';
import MapChina from './components/home/MapChina.vue';
import CardPark from './components/home/CardPark.vue';
import CardTrend from './components/home/CardTrend.vue';
import CardAbility from './components/home/CardAbility.vue';
import CardInnovation from './components/home/CardInnovation.vue';
import CardCompat from './components/home/CardCompat.vue';
import CardCredit from './components/home/CardCredit.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld
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
  }
};
</script>
