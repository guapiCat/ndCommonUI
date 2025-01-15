勾选部门-选择成员（带有禁用项）

<testSelectMember></testSelectMember>

单选

<testSelectMember1></testSelectMember1>

可以选择部门、人员（各选各的）

<testSelectMember2></testSelectMember2>

props：

| 属性                      | 默认值                                                       | 必须参数 | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| visible                   | false                                                        | 必须     | 必传：是否显示（取消会有自关闭，确定不会自关闭）             |
| isExpandedKeysRoot        | false                                                        |          | 是否展开根部门                                               |
| isSearchHasDepartment     | true                                                         |          | 搜索中是否包含部门                                           |
| isSavaOperation           | false                                                        |          | 是否是选择操作（false：组件会发送http，true：组件直接把参数返回给应用父组件。） |
| selectType                | 0                                                            |          | 1、 部门外部成员 ：只能选择成员，不能选择部门 选择部门是选择当前部门下的所有可用成员。2、项目成员 ：单选成员，选择管理员 多选成员：选择部门内外部成员 |
| saveProperties            | { deptIds: 'deptIds', userIds: 'userIds', roleIds: 'roleIds', // 是否需要deptIds参数 useDeptIds: true, // 是否需要deptIds参数 useUserIds: true, // 是否需要deptIds参数 useRoleIds: true } |          | 保存http请求发送构造的参数                                   |
| from                      | 0                                                            |          | 来源 1 部门外部人员 2、项目人员                             |
| deptId                    | 0                                                            |          | 禁用的部门id                                                 |
| disabledCheckedList       | []                                                           |          | 已经被选择的并且禁用的选择                                   |
| checkStrictly             | false                                                        |          | 是否联动（true：选人、选部门分开选，false：联动选择）        |
| isDefineDefaultChooseList | false                                                        |          | 是否自定义默认选择列表                                       |
| defaultChooseList         | []                                                           |          | 默认选中的成员列表                                           |
| title                     | 选择成员公用组件                                             |          | 标题                                                         |
| isSelectRole              | false                                                        |          | 是否显示选择角色                                             |
| treeUrl                   | ''                                                           | 必须     | 获取部门、成员结构树接口地址（post请求）                     |
| treeUrlOtherParams        | {}                                                           |          | 获取部门、成员结构树接口参数（post-query）                   |
| checkedListUrl            | ''                                                           |          | 获取默认选择接口地址（post请求）                             |
| checkedListUrlOtherParams | ''                                                           |          | 获取默认选择接口参数（post-body）                            |
| saveUrl                   | ''                                                           |          | 保存接口地址（post请求）                                     |
| saveUrlOtherParams        | ''                                                           |          | 保存接口额外参数（post-body），saveProperties属性构造的选择信息+当前属性传递的额外参数组装成最后的接口入参 |
| roleListAll               | []                                                           |          | 角色列表，应用自己传入（roleId、roleName属性构成的list集合） |
| headers                   | {}                                                           |          | http请求头：组件内部的所有请求都会携带                       |
| singleSelectUser          | false                                                        |          | 单选人员（单选人的时候，不能选择部门，选人为单选框，选择后直接替换右侧的已选择框） |
| selectUser                | false                                                        |          | 选人 （勾选部门的时候，是全选下面的人） -- 包含选择子部门下的所有成员 （如果只选一个部门下的人员，一个人一个人的勾） |
| selectDepartment          | false                                                        |          | 选部门（选部门就只当做选部门，下面的人要单独勾选）--展示形式：部门+人 （包含子部门） |
| selectRole                | false                                                        |          | 是否必须选择角色（保存的时候，组件是否需要校验角色是否选择了） |

emits

| 方法名         | 默认值 | 可选值 | 描述                                                         |
| -------------- | ------ | ------ | ------------------------------------------------------------ |
| save           |        |        | 保存之后的回调，组件不会自关闭，需要手动控制关闭（根据不同情况包含不同的值） |
| update:visible |        |        | 组件自关闭，外部无需调用                                     |
|                |        |        |                                                              |

***接口参数形式：***

**获取部门、成员树请求方式与返回参数：**

Get请求   http://xxx?xxx=xxx

```json
{
  "msg": "成功",
  "code": 0,
  "data": [
    {
      "id": 1,
      "parentDeptId": 0,
      "name": "新迪数字总部门",
      "children": [
        {
          "id": 2,
          "parentDeptId": 1,
          "name": "部门一",
          "children": [
            {
              "id": 11,
              "parentDeptId": 2,
              "name": "用户一",
              "children": [],
              "type": 1,
              "deptPath": "新迪数字总部门/部门一",
              "position": "java开发工程师"
            }
          ],
          "type": 2,
          "deptPath": "",
          "position": ""
        }
      ],
      "type": 2,
      "deptPath": "",
      "position": ""
    }
  ]
}
```

**保存成员、部门请求与返回参数。**

Post请求：http://xxx  

body入参

```json
{
    otherParamsObject: 2，
    // defineRoleListName
    roleIdList: [2, 3]，
	// defineUserListName
    userIdList: [13, 14]
}
```

返回参数

```json
{
   code: 0，
   data: null，
   msg: "成功"
}
```

**获取默认选择列表请求与返回参数。**

Post请求：http://xxx  

body入参

```json
{
    otherParamsObject: 2
}
```

返回参数

```json
{
   code: 0，
   data: 
    {
  "userList": [
    {
      "name": "用户2-1",
      "id": 13,
      "parentDeptId": 3,
      "type": 1,
      "deptPath": "新迪数字总部门/部门二",
      "position": "222"
    }
  ],
  "deptList": [
    {
      "name": "部门二",
      "id": 3,
      "parentDeptId": 1,
      "type": 2,
      "deptPath": "",
      "position": ""
    }
  ]
}，
   msg: "成功"
}
```

**角色列表数据格式：**

```json
[
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
]
```



### 代码

```vue

<template>
  <bee-button type="primary" @click="showSelectMember=true">勾选部门（选中下面的所有成员）</bee-button>
  <bee-button type="primary" @click="showSelectMember1=true" style="margin: 0 20px">单选</bee-button>
  <bee-button type="primary" @click="showSelectMember2=true" style="margin: 0 20px">可以选择部门、人员（各选各的）</bee-button>
  <bee-selectMember v-model:visible="showSelectMember" v-if="showSelectMember"
                    title="勾选部门-选择成员（带有禁用项）"
                    :is-select-role="true"
                    :checkStrictly="false" :from="1"
                    :dept-id="2" :disabled-checked-list="hasChooseMemberList"
                    :isDefineDefaultChooseList="true"
                    :role-list-all="roleList" save-url="http://localhost:8877/addUser"
                    :save-url-other-params="{username:1,password:2}"
                    :save-properties="saveProperties" @save="selectMember();" :selectType="1"
                    tree-url="http://localhost:8877/getDeptUserTree"></bee-selectMember>
  <bee-selectMember @save="selectMemberConfirm"
                    title="单选"
                    tree-url="http://localhost:8877/getDeptUserTree"
                    v-model:visible="showSelectMember1"
                    v-if="showSelectMember1"
                    :checkStrictly="false"
                    :disabled-checked-list="hasChooseMemberList"
                    :isDefineDefaultChooseList="true"
                    :select-user="true"
                    :from="2"
                    save-url="http://localhost:8877/getDeptUserTree"
                    :save-properties="saveProperties"
                    :singleSelectUser="true"
                    :select-type="1"
                    :save-url-other-params="{username:1,password:2}"
  ></bee-selectMember>
  <bee-select-member
      :title="'可以选择部门、人员（各选各的）'"
      v-model:visible="showSelectMember2" tree-url="http://localhost:8877/getDeptUserTree"
      checked-list-url="http://localhost:8877/querySelectUserDept" v-if="showSelectMember2" :save-properties="{
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
      save-url="http://localhost:8877/getDeptUserTree" @save="confirm" :checkStrictly="true"
      :tree-url-other-params="{needAdmin:true}"
  ></bee-select-member>
</template>

<script>
import BeeInput from "../../../plugins/ndInput/ndInput.vue";
import {ref} from "vue";
import BeeButton from "../../../plugins/ndButton/ndButton.vue";

export default {
  name: "testInput",
  setup() {
    const selectMember = ref(false)
    const showSelectMember1 = ref(false)
    const showSelectMember2 = ref(false)
    const hasChooseMemberList = ref([])
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
      showSelectMember,
      showSelectMember2,
      showSelectMember1,
      hasChooseMemberList,
      saveProperties,
      roleList,
    }
  },
  components: {BeeButton, BeeInput}
}
</script>

<style scoped>

</style>

```
