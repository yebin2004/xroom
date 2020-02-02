<template>
  <div class="my-card my-card-middle-h">
    <div class="my-card-header d-flex justify-content-between align-items-center px-3">
      <span class="my-header-title">产业园区</span>
      <div class="header-arrow text-hide"></div>
    </div>
    <!--/.card-header-->
    <div class="my-card-body py-2 pl-2 pr-1">
      <div class=" d-flex flex-nowrap justify-content-around align-items-center">
        <div class="">
          <div class="title park-name-list d-flex flex-column align-items-start">
            <div class="py-1">北京经济技术开发区开发区</div>
            <div class="py-1">天津经济技术开发区</div>
            <div class="py-1">北京经济技术开发区</div>
            <div class="py-1">天津经济技术开发区</div>
            <div class="py-1">天津经济技术开发区</div>
          </div>
        </div>
        <!--左列-->
        <div class="">
          <div class="title park-name-list d-flex flex-column align-items-start">
            <div class="py-1">北京经济技术开发区</div>
            <div class="py-1">天津经济技术开发区</div>
            <div class="py-1">北京经济技术开发区开发区</div>
            <div class="py-1">天津经济技术开发区</div>
            <div class="py-1">天津经济技术开发区</div>
          </div>
        </div>
        <!--右列-->
      </div>
    </div>
    <!--/.card-body-->
  </div>
  <!--/.card-->
</template>

<script>
export default {
  name: 'CardPark'
};
</script>