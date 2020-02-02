<template>
  <div class="my-card my-card-middle-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">产业园区</span>
      <div
        class="header-arrow text-hide"
        @click="$router.push('park/' + firstId)"
      ></div>
    </div>
    <!--/.card-header-->
    <div class="my-card-body py-2 px-2">
      <div class=" row justify-content-around align-items-center">
        <div
          class="col-6"
          v-for="sub in newParkList"
          :key="sub.id"
        >
          <div class="title park-name-list d-flex flex-column align-items-start">
            <div
              v-for="item in sub.items"
              :key="item.parkId"
              class="py-1"
              @click="$router.push('park/' + item.parkId)"
            >{{item.parkName}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--/.card-body-->
  </div>
  <!--/.card-->
</template>

<script>
import { getparknamelist } from '../utils/api';
export default {
  name: 'CardPark',
  data: function() {
    return { parkList: [], firstId: null };
  },
  computed: {
    newParkList: function() {
      return [{ id: 0, items: this.parkList.slice(0, 5) }, { id: 1, items: this.parkList.slice(5, 10) }];
    }
  },
  mounted: function() {
    getparknamelist({ count: 10 }).then(res => {
      this.parkList = res.parkList;
      this.firstId = res.parkList.length > 0 ? res.parkList[0].parkId : null;
    });
  }
};
</script>