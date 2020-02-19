<template>

  <main
    role="main"
    class="h-100"
  >
    <div class="d-flex flex-column justify-content-between align-items-center h-100">
      <div class="login-logo text-hide">logo</div>
      <div class="row w-100">
        <div class="offset-md-6 col-md-6">
          <div class="login-box d-flex flex-column justify-content-around align-items-center py-5 mb-5 mx-auto">
            <div
              v-if="error"
              class="alert alert-danger w-75 p-0 text-center"
              role="alert"
            >
              {{errorMsg}}
            </div>
            <!--err-msg-->
            <div class="login-name d-flex align-items-center">
              <div class="login-icon login-name-icon text-hide">icon</div>
              <input
                type="text"
                placeholder="请输入用户名"
                value="admin"
                v-model="userName"
              >
            </div>
            <!--login-name-->
            <div class="login-pwd d-flex align-items-center">
              <div class="login-icon login-pwd-icon text-hide">icon</div>
              <input
                type="password"
                placeholder="请输入密码"
                value="123456"
                v-model="userPassword"
              >
            </div>
            <!--login-pwd-->
            <div class="login-submit mt-2">
              <input
                type="button"
                value="登录"
                @click="submitForm()"
              >
            </div>
            <!--submit-btn-->
          </div>
          <!--box-->
        </div>
      </div>
      <!--row-->
      <div class="login-footer mx-auto p-0 border-0 mb-1">
        <span>量子防务全网作战室&copy; 版权所有</span>
      </div>
    </div>
    <Toasts
      :show-progress="true"
      :rtl="false"
      :max-messages="5"
      :time-out="3000"
      :closeable="true"
    ></Toasts>
  </main>

</template>
<script>
import BgLogin from '../assets/img/bg_login.jpg';
import { login } from './utils/api';
export default {
  data: function() {
    return {
      userName: 'admin',
      userPassword: 'admin',
      error: false,
      errorMsg: ''
    };
  },
  mounted: function() {
    let that = this;
    window.onresize = function() {
      that.setBg();
    };
  },
  watch: {
    userName: function() {
      this.error = false;
    },
    userPassword: function() {
      this.error = false;
    }
  },
  methods: {
    submitForm: function() {
      login({ username: this.userName, password: this.userPassword }).then(
        res => {
          console.log('login res', res);
          this.$store.dispatch('UserLogin', res.token);
          this.$store.dispatch('UserName', this.userName);
          if (this.$route.query.redirect === undefined) {
            this.$router.push('/');
          } else {
            this.$router.push(this.$route.query.redirect);
          }
        },
        err => {
          this.error = true;
          this.errorMsg = err.msg;
        }
      );
    },
    setBg: function() {
      /* if (window.innerWidth > 991.98) {
        window.document.body.style.background = 'url(' + BgLogin + ') center center/100%  no-repeat fixed';
      } else {
        window.document.body.style.background = 'url(' + BgLogin + ') center center/auto 100%  no-repeat fixed';
      } */
      window.document.body.style.background = 'url(' + BgLogin + ') center center/cover no-repeat fixed #01204f';
    }
  },
  beforeRouteEnter(to, from, next) {
    window.document.body.style['background-color'] = '#01204f';
    next(vm => {
      vm.setBg();
    });
  }
};
</script>
<style scoped src="../assets/css/login.css">
</style>