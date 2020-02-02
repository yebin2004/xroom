<template>
  <div class="container bg-white px-0">
    <NavSearch menu-item="战略规划库"></NavSearch>

    <div
      v-for="paperList in newPaperData"
      :key="paperList.id"
      class="row px-1"
    >
      <div
        class="col-md-4 mb-3"
        v-for="sub in paperList.subList"
        :key="sub.catalog"
      >
        <PaperCard v-bind:paper-data="sub"></PaperCard>
      </div>
    </div>
  </div>
</template>

<script>
import NavSearch from '../common/NavSearch.vue';
import PaperCard from './PaperCard.vue';
const mockPaperDB = require('../../assets/mock/paper-db.json');
export default {
  name: 'paperDB',
  components: {
    NavSearch,
    PaperCard
  },
  data: function() {
    return {
      fields: [
        { name: '自主可控' },
        { name: '先进感知' },
        { name: '信息展现' },
        { name: '时空基准' },
        { name: '网络通信与信息安全' },
        { name: '系统控制' },
        { name: '信息服务' },
        { name: '人工智能' },
        { name: '无人体系' }
      ],
      paperData: mockPaperDB
    };
  },
  computed: {
    newPaperData: function() {
      return [
        { id: 1, subList: this.paperData.slice(0, 3) },
        { id: 2, subList: this.paperData.slice(3, 6) },
        { id: 3, subList: this.paperData.slice(6, 9) }
      ];
    }
  },
  methods: {
    paperList: function() {
      this.$axios.get('/api/paperlist').then(res => {
        this.paperData = res.data;
      });
    }
  },
  mounted: function() {
    //this.paperList();
  }
};
</script>
