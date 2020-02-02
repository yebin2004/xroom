<template>
  <div class="ente-card subject-card shadow py-4 px-3">
    <div class="ente-label">股东信息</div>
    <template v-for="(item,index) in shList">
      <div
        class="sub-label py-2"
        :key="item.name"
      >股东信息{{index+1}}</div>
      <table
        class="subject-table w-100"
        :key="item.name"
      >
        <thead class="thead-light ">
          <tr>
            <th
              scope="col"
              class="w-25"
            >股东</th>
            <th
              scope="col"
              class="w-45"
            >股东类型</th>
            <th scope="col">认缴出资（金额/时间）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{item.name}}</td>
            <td class="shareholder">{{item.type}}</td>
            <td>{{item.quota}}</td>
          </tr>
        </tbody>
      </table>
    </template>

  </div>
</template>
<script>
export default {
  name: 'cardShareholder',
  props: { shList: Array }
};
</script>

<style  scoped src="../../assets/css/ente-credit.css">
</style>