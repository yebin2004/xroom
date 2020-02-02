<template>
  <div class="container-fluid  no-gutters px-0 container-second">
    <Header :selected-item="$route.meta.menuItem"></Header>
    <main
      role="main"
      class="container mt-1 mb-5"
    >
      <router-view
        @cancelLoading="cancelLoading"
        @startLoading="startLoading"
      ></router-view>
    </main>
    <Footer></Footer>
    <Toasts
      :show-progress="true"
      :rtl="false"
      :max-messages="5"
      :time-out="3000"
      :closeable="true"
    ></Toasts>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    ></loading>
  </div>
</template>
<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import BgTop from '../../assets/img/bg_top.jpg';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  props: ['menuItem'],
  data: function() {
    return { isLoading: false };
  },
  components: {
    Footer,
    Header,
    Loading
  },
  mounted: function() {
    let that = this;
    window.onresize = () => {
      return that.setBg();
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.setBg();
    });
  },
  methods: {
    setBg: function() {
      if (window.innerWidth > 991.98) {
        window.document.body.style.background = 'url(' + BgTop + ') center top / 100% auto  no-repeat fixed';
      } else {
        window.document.body.style.background = 'url(' + BgTop + ') center top /auto 40% no-repeat fixed';
      }
    },
    startLoading: function() {
      this.isLoading = true;
      console.debug('start this.isLoading', this.isLoading);
    },
    cancelLoading: function() {
      this.isLoading = false;
      console.debug('cancel this.isLoading', this.isLoading);
    }
  }
};
</script>


