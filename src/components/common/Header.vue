<template>
  <div class=" container pt-4">
    <header class="header clearfix align-items-center">
      <nav class="d-flex flex-column flex-md-row align-items-center">
        <h3 class="text-hide  mr-md-auto">量子防务全网数据作战室</h3>
        <!-- <img src="img/logo.png"></img> -->
        <ul class="nav nav-pills">
          <li class="nav-item "> <a
              class="nav-link my-nav-link"
              href="/"
            ><span class="my-nav-icon my-nav-icon-home text-hide"></span><span>返回首页</span>
              <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item"> <a
              class="nav-link my-nav-link"
              href="#"
            ><span class="my-nav-icon my-nav-icon-user text-hide"></span><span>{{userName}}</span></a>
          </li>
          <li class="nav-item"> <a
              class="nav-link my-nav-link"
              href="javascript:void(0);"
              @click="logout()"
            ><span class="my-nav-icon my-nav-icon-esc text-hide"></span><span>退出</span></a> </li>
        </ul>
      </nav>
    </header>
    <div class="nav-scroller mt-4">
      <nav class="nav d-flex justify-content-between pb-0">
        <template v-for="item in menuItems">
          <a
            class="my-nav-link selected"
            :key="item.text"
            v-if="item.text === selectedItem"
          >{{item.text}}</a>
          <a
            class="my-nav-link text-decoration-none"
            :href="item.href"
            :key="item.text"
            v-else
          >{{item.text}}</a>
        </template>
      </nav>
    </div>
    <!--nav-scroller-->
  </div>
</template>

<script>
import { logout } from '../utils/api';
export default {
  name: 'myHeader',
  props: ['selectedItem'],
  data: function() {
    return {
      userName: this.$store.state.userName,
      menuItems: [
        { href: '/paper-db', text: '战略规划库' },
        { href: '/integration', text: '军民融合大数据' },
        { href: '/core-compat', text: '企业国防核心能力指数' },
        { href: '/requirement', text: '军民融合需求推荐' },
        { href: '/park/0', text: '产业园区' },
        { href: '/innovation', text: '国防工业创新指数' },
        { href: '/ente-compat/0', text: '企业竞争力' },
        { href: '/ente-credit', text: '企业信用指数' }
      ]
    };
  },
  created() {
    logout.bind(this);
  },
  methods: {
    logout: function() {
      logout().then(
        () => {
          this.$store.dispatch('UserLogout');
          this.$router.push('/login');
        },
        err => {
          this.$toast.error(err.msg || '未知错误');
        }
      );
    }
  }
};
</script>