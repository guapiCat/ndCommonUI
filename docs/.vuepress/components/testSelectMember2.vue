<template>
  <button type="primary" @click="showSelectMember2=true">可以选择部门、人员（各选各的）</button>
  <nd-select-member
    :title="'可以选择部门、人员（各选各的）'"
    v-model:visible="showSelectMember2" tree-url="http://10.122.66.30:8877/getDeptUserTree"
    checked-list-url="http://10.122.66.30:8877/querySelectUserDept" v-if="showSelectMember2" :save-properties="{
                deptIds: 'deptIds',
                userIds: 'userIds',
                roleIds: 'roleIds',
                //是否需要deptIds参数
                useDeptIds: true,
                //是否需要deptIds参数
                useUserIds: true,
                //是否需要deptIds参数
                useRoleIds: false
            }"
    :checked-list-url-other-params="{username:1,password:1}"
    save-url="http://10.122.66.30:8877/getDeptUserTree" @save="confirm" :checkStrictly="true"
    :tree-url-other-params="{needAdmin:true}"
  ></nd-select-member>
</template>

<script>
import {ref} from "vue";
import ndSelectMember from "../../../src/views/vPc/common/ndSelectMember/ndSelectMember.vue";

export default {
  name: "testSelectMember2",
  components: {ndSelectMember},
  setup() {
    const hasChooseMemberList = ref([])
    const showSelectMember2 = ref(false)
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
      showSelectMember2
    }
  }
}
</script>

<style scoped>

</style>
