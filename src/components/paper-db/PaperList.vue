<template>
  <div class="container bg-white px-0">
    <BreadCrumb></BreadCrumb>
    <div class="card border-0 px-3">
      <div class="paper-card-header px-3">
        {{paperData.catalog}}
      </div>
      <div
        class="paper-card-list d-flex flex-column px-3 pt-2"
        v-for="item in paperData.items"
        v-bind:key="item.id"
      >
        <div
          class="row py-1 paper-card-item"
          onclick="window.location.href='paper'"
        >
          <div class="item-main col-9 col-md-10 d-flex align-items-center">
            <div class="title pr-md-2">{{item.title}}</div>
            <div class="dotted-line pr-1"></div>
          </div>
          <div class="col-3 col-md-2 d-flex justify-content-end pl-1"><span class="info text-nowrap">{{item.author}}</span><span class="info text-nowrap">{{item.area}}</span><span class="info text-nowrap">{{item.postTime.substring(0,7)}}</span></div>
        </div>
      </div>
    </div>
    <NavPage></NavPage>
  </div>
</template>
<script>
import BreadCrumb from '../common/BreadCrumb.vue';
import NavPage from '../common/NavPage.vue';
const mockPaperDB = require('../../assets/mock/paper-data.json');
import { getrmarticlelist } from '../utils/api';
export default {
  name: 'paperlist',
  data: function() {
    return {
      paperData: mockPaperDB
    };
  },
  watch: {
    paperData: function() {
      if (this.paperData.length < 8) {
        this.$store.dispatch('FootFixed', true);
      }
    }
  },
  components: {
    BreadCrumb,
    NavPage
  },
  methods: {
    paperList: function() {
      this.$axios.get('/api/paperlist').then(res => {
        this.paperData = res.data;
      });
    }
  },
  mounted: function() {
    getrmarticlelist().then(res => {
      this.paperData.items = res.page.list;
      this.paperData.catalog = '后台数据';
    });
  }
};
</script>
<style scoped>
.paper-card-header {
  background: url('../../assets/img/bg_paper-topic.png') no-repeat;
  background-size: 100% 2.668rem;
  height: 2.7569rem;
  font-size: 0.9783rem;
  color: #fff;
  line-height: 2.7569rem;
}

.paper-card-list {
  font-size: 0.7115rem;
}

.paper-card-item:hover {
  cursor: pointer;
}

.paper-card-list .title::before {
  content: '\00a0\00a0\00a0\00a0';
  background: url('../../assets/img/ic_article.png') no-repeat;
  background-size: 0.4385rem 0.7115rem;
  background-position: 0.2rem 0.2rem;
}

.paper-card-list .title {
  color: #333;
}

.paper-card-list .info {
  color: #999;
  white-space: nowrap;
}

.info + .info::before {
  content: '/';
}

.paper-card-list .item-main {
  display: -webkit-box;
  display: -ms-flexbox;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  overflow-x: hidden;
  white-space: nowrap;
}

.dotted-line {
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #999;
  margin-left: 0.5rem;
}
</style>