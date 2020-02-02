<template>
  <div class="container bg-white px-0">
    <BreadCrumb v-bind:back="true"></BreadCrumb>
    <div class="paper d-flex flex-column align-items-center mt-2 px-4">
      <div class="title">{{paperData.title}}</div>
      <div class="info d-flex justify-content-center mt-3">
        <span class="author pr-3">{{paperData.author}}</span>
        <span class="area pr-3">{{paperData.area}}</span>
        <span class="post-date">{{paperData.postDate}}</span>
      </div>
      <div class="picture mt-3"><img
          class="img-fluid"
          src="../../assets/img/article-placeholder.png"
        ></div>
      <div class="content mt-3">
        <span v-html="paperData.content"></span>

      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from '../common/BreadCrumb.vue';
const mockPaperData = require('../../assets/mock/paper.json');
export default {
  name: 'paperlist',
  data: function() {
    return {
      paperData: mockPaperData
    };
  },
  components: {
    BreadCrumb
  },
  methods: {},
  mounted: function() {}
};
</script>
<style scoped>
.paper .title {
  color: #333;
  font-size: 2.0455rem;
}

.paper .info {
  color: #999;
  font-size: 0.7115rem;
}

.paper .info .author::before {
  content: '作者：';
}

.paper .info .area::before {
  content: '领域：';
}

.paper .info .post-date::before {
  content: '发布日期：';
}

.paper .content {
  color: #666;
  font-size: 0.7115rem;
  line-height: 1.5rem;
  letter-spacing: 0.08rem;
}
</style>