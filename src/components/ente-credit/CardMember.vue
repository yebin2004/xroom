<template>
  <div class="ente-card subject-card shadow py-4 px-3">
    <div class="ente-label pb-2">主要人员</div>
    <table class="subject-table w-100">
      <tbody>

        <tr
          v-for="sub in newMemberList"
          :key="sub.id"
        >
          <template v-for="item in sub.subList">
            <td :key="item.id">{{item.position}}</td>
            <td
              :key="item.id + 1"
              class="member"
            >{{item.name}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CardMember',
  props: { memberList: [] },
  computed: {
    newMemberList: function() {
      if (this.memberList === undefined) return;
      console.debug('length', this.memberList.length);
      let nmList = [];
      let index = 0;
      while (index < this.memberList.length) {
        let subList = [];
        subList.push(this.memberList[index++]);
        if (index < this.memberList.length) subList.push(this.memberList[index]);
        nmList.push({ id: index, subList: subList });
        index++;
      }
      return nmList;
    }
  }
};
</script>

<style  scoped src="../../assets/css/ente-credit.css">
</style>