<template>
  <div class="requ-card shadow py-3 px-3">
    <div class="requ-label align-self-auto mb-2 ">园区简介</div>
    <div class="park-introduction mb-3">
      <!-- <span v-html="parkInfo.introduction"></span> -->
      <read-more
        more-str="展开"
        :text="introduction"
        link="#"
        less-str="收回"
        :max-chars="300"
      ></read-more>
    </div>
    <div class="py-1"><span class="park-label ">园区名称</span><span>{{parkInfo.parkName}}</span></div>
    <div class="py-1"><span class="park-label">级别</span><span>{{parkInfo.level}}</span></div>
    <div class="py-1"><span class="park-label">建立时间</span><span>{{parkInfo.setupTime}}</span></div>
    <div class="py-1"><span class="park-label">特色</span><span>{{parkInfo.features}}</span></div>
    <div class="py-1"><span class="park-label">地址</span><span>{{parkInfo.address}}</span></div>
  </div>
</template>
<script>
export default {
  name: 'CardIntroduction',
  props: {
    parkInfo: { type: Object, value: {} }
  },
  data: function() {
    return { introduction: '' };
  },
  watch: {
    parkInfo: function() {
      this.introduction = this.parkInfo.introduction;
    }
  }
};
</script>
<style scoped src="../../assets/css/park.css">
</style>