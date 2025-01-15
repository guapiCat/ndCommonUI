<template>
  <button type="primary" @click="showSelectMember=true">勾选部门（选中下面的所有成员）</button>
  <nd-selectMember v-model:visible="showSelectMember" v-if="showSelectMember"
                    title="勾选部门-选择成员（带有禁用项）"
                    :is-select-role="true"
                    :checkStrictly="false" :from="1"
                    :dept-id="2" :disabled-checked-list="hasChooseMemberList"
                    :isDefineDefaultChooseList="true"
                    :role-list-all="roleList" save-url="http://10.122.66.30:8877/addUser"
                    :save-url-other-params="{username:1,password:2}"
                    :save-properties="saveProperties" @save="selectMember();" :selectType="1"
                    tree-url="http://10.122.66.30:8877/getDeptUserTree"></nd-selectMember>
</template>

<script>
import {ref} from "vue";
import ndSelectMember from "../../../src/views/vPc/common/ndSelectMember/ndSelectMember.vue";

export default {
  name: "testSelectMember",
  components: {ndSelectMember},
  setup() {
    const hasChooseMemberList = ref([])
    const showSelectMember = ref(false)
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
      showSelectMember
    }
  }
}
</script>

<style scoped>

</style>
