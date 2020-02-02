<template>
  <nav
    aria-label="breadcrumb"
    class="py-3 d-flex align-items-center justify-content-between"
  >
    <ol class="breadcrumb bg-white mb-0">
      <li class="breadcrumb-item"><a href="/">首页</a></li>
      <li class="breadcrumb-item"><a href="paper-db">战略规划库</a></li>
      <li
        class="breadcrumb-item active"
        aria-current="page"
      >自主可控</li>
    </ol>
    <a
      v-if="back"
      class="breadcrumb-back pr-3"
      href="#"
      onClick="history.back(-1);"
    >返回</a>
  </nav>
</template>
<script>
export default {
  name: 'breadcrumb',
  props: {
    crumbItems: Array,
    back: { type: Boolean, default: false }
  },
  mounted: function() {
    //this.crumbItems.push({ href: '\\' });
  }
};
</script>
<style scoped>
.breadcrumb-back {
  font-size: 0.7115rem;
}
</style>