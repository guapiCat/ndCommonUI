<template>
  <button type="primary" @click="showSelectMember1=true">单选</button>
  <nd-selectMember @save="selectMemberConfirm"
                    title="单选"
                    tree-url="http://10.122.66.30:8877/getDeptUserTree"
                    v-model:visible="showSelectMember1"
                    v-if="showSelectMember1"
                    :checkStrictly="false"
                    :disabled-checked-list="hasChooseMemberList"
                    :isDefineDefaultChooseList="true"
                    :select-user="true"
                    :from="2"
                    save-url="http://10.122.66.30:8877/getDeptUserTree"
                    :save-properties="saveProperties"
                    :singleSelectUser="true"
                    :select-type="1"
                    :save-url-other-params="{username:1,password:2}"
  ></nd-selectMember>
</template>

<script>
import {ref} from "vue";
import ndSelectMember from "../../../src/views/vPc/common/ndSelectMember/ndSelectMember.vue";

export default {
  name: "testSelectMember1",
  components: {ndSelectMember},
  setup() {
    const hasChooseMemberList = ref([])
    const showSelectMember1 = ref(false)
    const roleList = ref([
      {
        roleId: 1,
        roleName: '超级管理员'
      },
      {
        roleId: 2,
        roleName: '前端开发'
      },
      {
        roleId: 3,
        roleName: 'Java开发'
      }
    ])
    const saveProperties = ref({
      deptIds: 'deptIds',
      userIds: 'userIdList',
      roleIds: 'roleIdList',
      useDeptIds: false,
      useUserIds: true,
      useRoleIds: true
    })
    return {
      hasChooseMemberList,
      saveProperties,
      roleList,
      showSelectMember1
    }
  }
}
</script>

<style scoped>

</style>
