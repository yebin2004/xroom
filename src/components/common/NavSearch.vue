<template>
  <div class="nav-search pt-1 pb-0 ">
    <nav class="navbar navbar-expand-lg align-items-center pb-3"> <span
        class="my-navbar-brand mr-auto"
        href="#"
      >{{menuItem}}</span>
      <form
        class="form-inline pr-1"
        v-on:submit.prevent
        v-show="showSearch"
      >
        <div class="input-group input-group-sm pr-2">
          <div class="input-group-prepend">
            <span
              class="input-group-text border-0 search-icon text-hide"
              style="border:0; background-color: #eeeeee;border-top-left-radius: 1rem;border-bottom-left-radius: 1rem;"
            >icon</span>
          </div>
          <input
            type="text"
            class="form-control"
            style="border:0; background-color: #eeeeee; border-top-right-radius: 1rem;border-bottom-right-radius: 1rem;"
            placeholder="请输入关键字"
            v-model="inputVal"
            @keyup.enter="searchAction"
          >
          <button
            type="button"
            class=" search-button ml-2"
            @click="searchAction"
          >搜索</button>
        </div>
      </form>
      <!-- <div class="my-search-bar">
          <span class="search-icon"><i class="fa fa-search"></i></span><input
            type="text"
            class=""
            placeholder="请输入关键字"
          >
          <button
            type="submit"
            class=""
          >搜索</button>
        </div> -->
    </nav>
  </div>
</template>
<script>
export default {
  name: 'navSearch',
  props: { menuItem: { type: String, value: '' }, showSearch: { type: Boolean, default: true } },
  data: function() {
    return { inputVal: '' };
  },
  methods: {
    searchAction: function() {
      console.debug('val', this.inputVal);
      if (this.inputVal === '' || this.inputVal === null) return;
      this.$emit('search', this.inputVal);
    }
  }
};
</script>
<style scoped>
.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>