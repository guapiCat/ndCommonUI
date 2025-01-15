const selectMemberProps = {
  // 是否展开第一个元素
  isExpandedKeysRoot: {
    type: Boolean,
    default: true,
    required: false
  },
  // 搜索中是否包含部门
  isSearchHasDepartment: {
    type: Boolean,
    default: true,
    required: false
  },
  // 是否进行保存操作
  isSavaOperation: {
    type: Boolean,
    default: false,
    required: false
  },
  /**
     * 1 部门外部成员 ：只能选择成员，不能选择部门 选择部门是选择当前部门下的所有可用成员
     * 2 项目成员 ：单选成员，选择管理员 多选成员：选择部门内外部成员
     */
  selectType: {
    type: Number,
    default: 0,
    required: false
  },
  // 自定义保存参数
  saveProperties: {
    type: Object,
    default () {
      return {
        deptIds: 'deptIds',
        userIds: 'userIds',
        roleIds: 'roleIds',
        // 是否需要deptIds参数
        useDeptIds: true,
        // 是否需要deptIds参数
        useUserIds: true,
        // 是否需要deptIds参数
        useRoleIds: true
      }
    }
  },
  // 来源  1 部门外部人员 2、项目人员
  from: {
    type: Number,
    default: 0,
    required: false
  },
  // 禁用的部门id
  deptId: {
    type: Number,
    default: 0,
    required: false
  },
  // 已经被选择的并且禁用的选择
  disabledCheckedList: {
    type: Array,
    default () {
      return []
    },
    required: false
  },
  // 不联动（选人、选部门分开选）
  checkStrictly: {
    type: Boolean,
    default: false,
    required: false
  },
  // 是否自定义默认选择列表
  isDefineDefaultChooseList: {
    type: Boolean,
    default: false,
    required: false
  },
  // 选人选中的成员列表
  defaultChooseList: {
    type: Array,
    default () {
      return []
    },
    required: false
  },
  title: {
    type: String,
    default: '选择成员公用组件',
    required: false
  },
  visible: {
    type: Boolean,
    default: true,
    required: true
  },
  // 是否选择角色
  isSelectRole: {
    type: Boolean,
    default: false
  },
  // 获取部门成员列表树形结构tree
  treeUrl: {
    type: String,
    required: false
  },
  // 获取部门成员列表树形结构tree额外参数
  treeUrlOtherParams: {
    type: Object,
    default () {
      return {}
    }
  },
  // 获取已选择的列表url
  checkedListUrl: {
    type: String,
    required: false
  },
  // 获取已选择的列表url额外参数
  checkedListUrlOtherParams: {
    type: Object,
    default () {
      return {}
    }
  },
  // 保存url
  saveUrl: {
    type: String,
    required: false
  },
  // 保存url额外参数
  saveUrlOtherParams: {
    type: Object,
    default () {
      return {}
    }
  },
  // 角色列表
  roleListAll: {
    type: Array,
    default () {
      return []
    }
  },
  // http请求头
  headers: {
    type: Object,
    required: false,
    default () {
      return {}
    }
  },
  // 单选人员（单选人的时候，不能选择部门，选人为单选框，选择后直接替换右侧的已选择框）
  singleSelectUser: {
    type: Boolean,
    default: false
  },
  // 选人 （勾选部门的时候，是全选下面的人） -- 包含选择子部门下的所有成员 （如果只选一个部门下的人员，一个人一个人的勾）
  selectUser: {
    type: Boolean,
    default: false
  },
  // 选部门（选部门就只当做选部门，下面的人要单独勾选）--展示形式：部门+人  （包含子部门）
  selectDepartment: {
    type: Boolean,
    default: false
  },
  // 是否选择角色
  selectRole: {
    type: Boolean,
    default: false
  }
}
export { selectMemberProps }
