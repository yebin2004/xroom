<template>
  <div class="card border-0 shadow">
    <div class="paper-card-header d-flex justify-content-between align-items-center px-3">
      <div class="field-belong">{{paperData.catalog}}</div>
      <div
        class="more"
        onclick=" window.location.href='\paper-list'"
      >更多</div>
    </div>
    <div
      class="paper-card-main d-flex align-items-center  py-2 px-3"
      onclick=" window.location.href='paper'"
    >
      <img
        class=""
        src="../../assets/img/img-placeholder-58x58.png"
      >
      <div class="main-paper d-flex flex-column pl-2 ">
        <div class="title">{{paperData.topItem.title}}</div>
        <div class="info pt-1">{{paperData.topItem.author}}/{{paperData.topItem.area}}/{{paperData.topItem.postDate}}</div>
      </div>
    </div>
    <div
      class="paper-card-list d-flex flex-column px-3 pb-2"
      v-for="item in paperData.items"
      v-bind:key="item.paperId"
    >
      <div
        class="card-list-item row align-items-center py-1"
        onclick=" window.location.href='paper'"
      >
        <div class="col-8 col-sm-7 icon-title pr-1">
          {{item.title}}
        </div>
        <div class="col-4 col-sm-5 info pl-1 text-right">{{item.author}}/{{item.area}}/{{item.postDate.substr(0,7)}}</div>
      </div>
    </div>
    <div class="paper-card-footer d-flex align-items-center justify-content-between px-3 py-2">
      <span class="footer-lable">关联企业</span><span
        v-for="company in paperData.related"
        :key="company"
      >{{company}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'paperCard',
  props: { paperData: Object }
};
</script>

<style scoped>
.paper-card-header {
  background: url('../../assets/img/bg_paper-topic.png') no-repeat;
  background-size: 100% 2.668rem;
  height: 2.668rem;
  font-size: 0.8893rem;
  color: #fff;
}

.paper-card-header .more:hover {
  cursor: pointer;
}

.paper-card-main img {
  height: 3.625rem;
  width: 3.625rem;
}

.paper-card-main:hover {
  cursor: pointer;
}

.paper-card-main .main-paper {
}

.paper-card-main .main-paper .title {
  font-size: 0.7115rem;
  color: #333333;
}

.card .info {
  font-size: 0.6225rem;
  color: rgba(0, 0, 0, 0.5);
}

.paper-card-list .card-list-item:hover {
  cursor: pointer;
}

.paper-card-list .card-list-item .title,
.paper-card-list .card-list-item .icon-title {
  font-size: 0.6225rem;
  color: #333333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.paper-card-list .card-list-item .paper-icon {
  background: url('../../assets/img/ic_article.png') no-repeat;
  background-size: 0.4385rem 0.6rem;
  background-position: 0.2rem 0.25rem;
  height: 1rem;
  width: 0.8rem;
}

.paper-card-list .card-list-item .icon-title::before {
  content: '\00a0\00a0\00a0';
  background: url('../../assets/img/ic_article.png') no-repeat;
  background-size: 0.4385rem 0.6rem;
  background-position: 0.2rem 0.25rem;
}

.paper-card-list .card-list-item .info {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.paper-card-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  font-size: 0.6225rem;
  color: #007fff;
}

.paper-card-footer .footer-lable {
  background: #ff7f00;
  color: #fff;
  padding: 0.1rem 0.3rem;
}
</style>