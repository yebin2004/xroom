<template>

  <div class="my-card my-card-left-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">战略规划库</span>
      <div
        class="header-arrow text-hide"
        onclick=" window.location.href='http://baogao.qdefense.cn/'"
      ></div>
    </div>
    <div class="my-card-body py-1 d-flex flex-column align-items-left">
      <div
        v-for="(item,index) in paperList"
        :key="item.paperId"
        v-bind:class="{'my-dark-bg': index % 2 === 0}"
        class="my-card-item d-flex flex-column py-1 pr-2"
        onclick=" window.location.href='http://baogao.qdefense.cn/'"
      >
        <div class="article  d-flex pl-2">
          <div class="icon1 text-hide"></div>
          <div class="title">{{item.title}}</div>
        </div>
        <div class="info d-flex justify-content-between align-items-center px-4">
          <span>{{item.author}}</span><span>{{item.area}}</span><span>{{item.postTime.substring(5,10)}}</span>
        </div>
      </div>
    </div>
  </div>
  <!--/战略规划库-->
</template>
<script>
const mockPaperDB = require('../../assets/mock/paper-data.json');
export default {
  name: 'cardPaper',
  data: function() {
    return { paperList: mockPaperDB.items };
  }
};
</script>