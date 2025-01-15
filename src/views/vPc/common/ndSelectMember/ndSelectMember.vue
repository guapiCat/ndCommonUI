<template>
  <teleport to="body">
    <div class="bee_selectMemberTreeContainer" v-show="visible">
      <div class="tc-box tc-add-person tc-add-person-2" @onmousedown="moveBegin ">
        <div class="tc-cmnTit">{{ title }}<i class="tc-close" @click="close">×</i></div>
        <div class="tc-cmnCnt clearfix" style="padding: 0px;width: 711px">
          <div class="person-box">
            <div class="search-person-box">
              <input type="text" placeholder="请输入姓名、部门或职务" v-model.trim="keyword"
                     @input="inputKeyWord" autocomplete="none" aria-autocomplete="none">
              <i class="clear" v-show="keyword" @click="clear"></i>
            </div>
            <div class="person-structure-box scroll-demo" style="display:block;overflow: auto"
                 v-show="showType===1">
              <nd-select-member-tree :is-single-select="singleSelectUser" :data="treeList"
                                      @nodeClick="nodeClick" @check="checkBtn"
                                      :default-selected-keys="selectedKeys"
                                      ref="memberTree" :default-expand-keys="expandedKeys"
                                      :checkStrictly="checkStrictly" :select-type="selectType"></nd-select-member-tree>
            </div>
            <!-- 按照姓名模糊搜索结果 -->
            <div class="searchByname-box scroll-demo" style="overflow: auto" v-show="showType===0">
              <ul v-show="searchListLocal.length">
                <li v-for="item in searchListLocal" :key="item.id+''+item.type" @click="rowClick(item)">
                  <!--todo 复选框-->
                  <i class="checkbox default" v-if="hasChooseCurrentItem(item)&&!item.disabled&&!singleSelectUser"
                     @click.stop="check(item,true)"></i>
                  <i class="checkbox" v-if="!hasChooseCurrentItem(item)&&!item.disabled&&!singleSelectUser"
                     @click.stop="check(item,false)"></i>
                  <!--disabled:1 禁用并且不选择 2 禁用并且选择-->
                  <i class="checkbox node-checkbox-no" style="cursor: no-drop"
                     v-if="item.disabled==1&&!singleSelectUser"></i>
                  <i class="checkbox node-checkbox-s-no" style="cursor: no-drop"
                     v-if="item.disabled==2&&!singleSelectUser"></i>

                  <!--todo 单选框-->
                  <i class="node-radiobox node-radiobox-s"
                     v-if="hasChooseCurrentItem(item)&&!item.disabled&&singleSelectUser"
                     @click.stop="check(item,true)"></i>
                  <i class="node-radiobox"
                     v-if="!hasChooseCurrentItem(item)&&!item.disabled&&singleSelectUser"
                     @click.stop="check(item,false)"></i>
                  <!--单选框禁用-->
                  <!--disabled:1 禁用并且不选择 2 禁用并且选择-->
                  <i class="node-radiobox node-radiobox-no" style="cursor: no-drop"
                     v-if="item.disabled==1&&singleSelectUser"></i>
                  <i class="node-radiobox node-radiobox-s-no" style="cursor: no-drop"
                     v-if="item.disabled==2&&singleSelectUser"></i>

                  <!--todo 内容-->
                  <div class="name">
                    <i class="person-img" v-if="item.type===1">
                      <img :src="item.ossUrl+'/'+item.avatar" v-if="item.avatar">
                      <img src="../images/default-person-pic.png" v-else>
                    </i>
                    <i class="ico-depart" v-if="item.type===2"></i>
                    <div class="content">
                      <p v-html="highText(item.name+(item.type==1?'（'+item.position+'）':''),keyword, 'em', 'key-word')"
                         :title="item.name+(item.type==1?'（'+item.position+'）':'')"
                         class="userName"></p>
                      <p class="deptName" :title="item.deptPath.split('，').join('\n')">{{ item.deptPath }}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="noResult" v-show="!searchListLocal.length">没有找到相关的结果</div>
            </div>
          </div>
          <div class="selected-person">
            <div class="mark" v-if="selectType==1||selectType==2">已选择了{{ chooseList.length }}个成员</div>
            <div class="mark" v-else>已选择了{{ chooseList.length }}个部门、成员</div>
            <div class="clearAll" @click="clearAll">全部清除</div>
            <ul class="scroll-demo" style="overflow: auto;clear: both">
              <li v-for="(item,index) in chooseList" :key="item.id+''+item.type">
                <i class="person-img" v-if="item.type===1">
                  <img :src="item.avatar" v-if="item.avatar">
                  <img src="../images/default-person-pic.png" v-else>
                </i>
                <i class="ico-depart" v-if="item.type===2"></i>
                <span :title="item.name">{{ item.name }}</span>
                <i class="del" @click="removeMember(item,index)"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="tc-btn-box" style="margin: 0px;">
          <div>
            <label v-if="isSelectRole">
              <span>请设置权限：</span>
              <div class="dropDown w170">
                <el-popover trigger="click"
                            :hide-after="0" placement="top">
                  <template #reference>
                    <div class="value" :title="getRoleNameList()" style="width: 170px">{{ getRoleNameList() }}</div>
                  </template>
                  <div class="dropDown-content" style="padding:5px 0px;height: 120px;overflow: auto">
                    <p v-for="(item,index) in roleList" :key="index" @click.stop="item.checked=!item.checked">
                      <i class="checkbox ico-checkbox" :class="{'ico-checkbox02-s':item.checked}"></i>
                      <span style="margin-left: 5px;" :title="item.roleName">{{ item.roleName }}</span>
                    </p>
                  </div>
                </el-popover>
              </div>
            </label>
            <a class="btn-cancel" style="cursor: no-drop" v-if="singleSelectUser&&!chooseList.length">确定</a>
            <a class="btn-sure" @click="sure" v-else>确定</a>
            <a class="btn-cancel" @click="close">取消</a>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>

import {onMounted, ref, toRefs, getCurrentInstance} from 'vue'
import {selectMemberProps} from './type'
import ndSelectMemberTree from './ndSelectMemberTree.vue'
import './ndSelectMember.css'
import {get, post} from '../utils/httpRequest'
import {newDimMessage} from '../ndMessage/ndMessage'
import {isArray, highText} from '../../../../utils/tools/index'
import { eventBus } from '../EventBus'
import {ElPopover} from 'element-plus'

// require('element-plus/es/components/message/style/css')

export default {
  name: 'ndSelectMember',
  components: {ndSelectMemberTree, ElPopover},
  emits: ['close', 'update:visible', 'sure'],
  setup(props, {emit}) {
    const clearAll = () => {
      proxy.$nextTick(() => {
        memberTree.value.setCheckedKeys([])
      })
      chooseList.value = []
    }
    const sure = async () => {
      const obj = {}
      if (saveProperties.value.useDeptIds) {
        obj[saveProperties.value.deptIds] = []
      }
      if (saveProperties.value.useUserIds) {
        obj[saveProperties.value.userIds] = []
      }
      if (saveProperties.value.useRoleIds) {
        obj[saveProperties.value.roleIds] = []
      }
      chooseList.value.forEach(item => {
        if (item.type === 2) {
          obj[saveProperties.value.deptIds].push(item.id)
        } else {
          obj[saveProperties.value.userIds].push(item.id)
        }
      })
      if (isSelectRole.value) {
        obj[saveProperties.value.roleIds] = []
        roleList.value.forEach(item => {
          if (item.checked) {
            obj[saveProperties.value.roleIds].push(item.roleId)
          }
        })
        if (!obj[saveProperties.value.roleIds].length) {
          await newDimMessage({message: '请选择角色', type: 'warning'})
          return
        }
        console.log(obj[saveProperties.value.userIds])
        if (!obj[saveProperties.value.userIds].length) {
          await newDimMessage({message: '请选择成员', type: 'warning'})
          return
        }
      }
      // 是否是选择操作
      if (props.isSavaOperation) {
        emit('save', chooseList.value)
        emit('update:visible', false)
        return
      }
      const tempObj = Object.assign(obj, saveUrlOtherParams.value)
      console.log('待传输数据', tempObj)
      const result = await post(saveUrl.value, tempObj, headers.value)
      if (result.code === 0) {
        emit('save', obj)
        emit('update:visible', false)
      }
      console.log('信息列表', chooseList.value)
    }
    const close = () => {
      emit('update:visible', false)
    }
    const getRoleNameList = () => {
      const temp = []
      roleList.value.forEach(item => {
        if (item.checked) {
          temp.push(item.roleName)
        }
      })
      if (!temp.length) {
        return '请选择权限'
      }
      return temp.join(',')
    }
    const showSelectRole = ref(false)
    const setChoose = () => {
      chooseList.value = chooseList.value.filter(item => {
        return item.name !== '未分组成员'
      })
      const userListTemp = []
      const deptListTemp = []
      chooseList.value.forEach(item => {
        if (item.type === 2) {
          deptListTemp.push(item)
        } else if (item.type === 1) {
          userListTemp.push(item)
        }
      })
      chooseList.value = deptListTemp.concat(userListTemp)
    }
    // 递归禁用当前部门与当前部门下的成员
    const disableDept = (list, tempDisableUser) => {
      list.forEach(item => {
        if ((item.type === 1 && item.parentDeptId === deptId.value && !item.noDeptUserFlag)) {
          item.disabled = 1
          // 缓存被禁用的当前部门下的成员
          if (item.type === 1) {
            tempDisableUser.push(item)
          }
        }
        if (item.children && item.children.length) {
          disableDept(item.children, tempDisableUser)
        }
      })
    }
    // 递归所有成员
    const disableAllUser = (list, data) => {
      list.forEach(item => {
        if (item.type === 1 && item.id === data.id) {
          item.disabled = 1
        }
        if (item.children && item.children.length) {
          disableAllUser(item.children, data)
        }
      })
    }
    // 递归禁用所有的部门
    const disableAllDept = (list) => {
      list.forEach(item => {
        if (item.type === 2) {
          item.disabled = 1
        }
        if (item.children && item.children.length) {
          disableAllDept(item.children)
        }
      })
    }
    // 递归禁用已选择的成员
    const disableHasCheckedList = (list, userId) => {
      list.forEach(item => {
        if (item.type === 1 && item.id === userId) {
          item.disabled = 2
        }
        if (item.children && item.children.length) {
          disableHasCheckedList(item.children, userId)
        }
      })
    }
    const {proxy} = getCurrentInstance()
    const memberTree = ref(null)
    const {
      isExpandedKeysRoot,
      saveProperties,
      roleListAll,
      disabledCheckedList,
      deptId,
      from,
      singleSelectUser,
      isSelectRole,
      treeUrl,
      treeUrlOtherParams,
      headers,
      checkedListUrl,
      checkedListUrlOtherParams,
      saveUrl,
      saveUrlOtherParams,
      title,
      defaultChooseList,
      isDefineDefaultChooseList,
      selectType
    } = toRefs(props)
    // 获取唯一主键
    const getKey = (item) => {
      return item.id + '' + item.type
    }
    // 获取部门成员树
    const getDeptList = async () => {
      const tempObj = Object.assign({}, treeUrlOtherParams.value)
      const result = await get(treeUrl.value, tempObj, headers.value)
      if (result.code === 0) {
        // 判断返回树形结构是否是数组
        if (isArray(result.data)) {
          treeList.value = result.data.concat([])
        } else {
          treeList.value = [result.data]
        }
        // 赋值搜素列表
        searchList.value = treeList.value.concat([])
        // 是否展开第一级
        if (isExpandedKeysRoot.value) {
          if (treeList.value.length) {
            expandedKeys.value.push(getKey(treeList.value[0]))
            await proxy.$nextTick(() => {
              memberTree.value.setExpandKeys(expandedKeys.value)
            })
          }
        }
        if (from.value === 1) {
          const tempDisableUser = []
          disableDept(treeList.value, tempDisableUser)
          disableDept(searchList.value, tempDisableUser)
          console.log(tempDisableUser)
          tempDisableUser.forEach(item => {
            disableAllUser(treeList.value, item)
            disableAllUser(searchList.value, item)
          })
          disabledCheckedList.value.forEach(item => {
            disableHasCheckedList(treeList.value, item.userId)
            disableHasCheckedList(searchList.value, item.userId)
          })
        } else if (from.value === 2) {
          const tempDisableUser = []
          disableDept(treeList.value, tempDisableUser)
          disableDept(searchList.value, tempDisableUser)
          tempDisableUser.forEach(item => {
            disableAllUser(treeList.value, item)
            disableAllUser(searchList.value, item)
          })
          disabledCheckedList.value.forEach(item => {
            disableHasCheckedList(treeList.value, item.userId)
            disableHasCheckedList(searchList.value, item.userId)
          })
        }
      } else {
        await newDimMessage({message: result.msg, type: 'warning'})
      }
    }
    // 去重选择成员中的重复数据
    const removeRepeatChooseList = () => {
      const obj = {}
      chooseList.value = chooseList.value.reduce(function (a, b) {
        // eslint-disable-next-line no-unused-expressions
        obj[b.id + '' + b.type] ? '' : obj[b.id + '' + b.type] = true && a.push(b)
        return a
      }, [])
      return chooseList.value
    }
    const getCheckedList = async () => {
      const result = await post(checkedListUrl.value, checkedListUrlOtherParams.value, headers.value)
      if (result && result.code === 0) {
        chooseList.value = result.data.deptList.concat(result.data.userList)
        console.log('chooseList--', chooseList.value)
      } else {
        newDimMessage({message: result.msg, type: 'warning'})
      }
    }
    const nodeClick = (item) => {
      emit('nodeClick', item)
    }
    const removeMember = (data) => {
      const tempData = JSON.parse(JSON.stringify(data))
      proxy.$nextTick(() => {
        memberTree.value.updateKeys(tempData, 'remove')
      })
      setChoose()
    }
    const keyword = ref('')
    const showType = ref(1)
    const inputKeyWord = () => {
      document.querySelector('.searchByname-box').scrollTop = 0
      showType.value = 0
      searchListLocal.value = []
      searchKeyword(searchList.value, searchListLocal.value)
      const keysObj = {}
      const tempSearch = []
      searchListLocal.value.forEach(item => {
        if (Object.keys(keysObj).includes(item.id + '' + item.type)) {
          const tempIndex = tempSearch.findIndex(item0 => {
            return item0.id + '' + item0.type === item.id + '' + item.type
          })
          tempSearch[tempIndex].deptPath = tempSearch[tempIndex].deptPath + '，' + item.deptPath
        } else {
          keysObj[item.id + '' + item.type] = JSON.parse(JSON.stringify(item))
          tempSearch.push(JSON.parse(JSON.stringify(item)))
        }
      })
      searchListLocal.value = tempSearch.concat([])
      if (!keyword.value) {
        showType.value = 1
      }
    }
    /**
     * 根据关键词搜索
     * @param list 集合
     * @param searchListLocal 本地搜索存储路径
     */
    const searchKeyword = (list, searchListLocal) => {
      list.forEach(item => {
        if (singleSelectUser.value) {
          if (!item.disabled && item.type === 1 && keyword.value && (item.name.includes(keyword.value) || (item.position && item.position.includes(keyword.value)))) {
            searchListLocal.push(item)
          }
        } else {
          if (!item.disabled && keyword.value && (item.name.includes(keyword.value) || (item.position && item.position.includes(keyword.value)))) {
            searchListLocal.push(item)
          }
        }
        if (item.children && item.children.length) {
          searchKeyword(item.children, searchListLocal)
        }
      })
    }
    const clear = () => {
      document.querySelector('.searchByname-box').scrollTop = 0
      keyword.value = null
      showType.value = 1
    }
    // ---分割线
    // 部门树结构
    const treeList = ref([])
    // 默认选中的集合列表
    const selectedKeys = ref([])
    eventBus.on('selectKeys', (payload) => {
      selectedKeys.value = payload.concat([])
    })
    const expandedKeys = ref([])
    // 已选择的成员列表
    const chooseList = ref([])
    // 搜索列表
    const searchList = ref([])
    // 角色列表
    const roleList = ref([])
    // 本地使用的搜索列表
    const searchListLocal = ref([])
    roleList.value = JSON.parse(JSON.stringify(roleListAll.value))
    // 判断选中复选框是否在选中的成员列表中
    const hasInChooseList = (item) => {
      return chooseList.value.findIndex(item0 => {
        return item0.id + '' + item0.type === item.id + '' + item.type
      })
    }
    const childrenList = ref([])
    const getSonMember = (list) => {
      list.forEach(item => {
        if (item.type === 1 && !item.disabled) {
          childrenList.value.push(item)
        }
        if (item.children && item.children.length) {
          getSonMember(item.children)
        }
      })
    }
    const setDefaultSelectKeys = (list) => {
      list.forEach(item => {
        selectedKeys.value.push(item.id + '' + item.type)
      })
      proxy.$nextTick(() => {
        memberTree.value.setCheckedKeys(selectedKeys.value)
      })
    }
    const hasChooseCurrentItem = (data) => {
      const temp = memberTree.value.selectKeys.filter(item => {
        return item === getKey(data)
      })
      if (temp.length) {
        return true
      } else {
        return false
      }
    }
    onMounted(async () => {
      await getDeptList()
      if (isDefineDefaultChooseList.value) {
        chooseList.value = defaultChooseList.value.concat([])
        setChoose()
      } else {
        await getCheckedList()
      }
      // 只能选择成员
      if (singleSelectUser.value) {
        console.log(disableAllDept)
        disabledCheckedList.value.forEach(item => {
          disableHasCheckedList(treeList.value, item.userId)
        })
      }
      setDefaultSelectKeys(chooseList.value)
    })
    // 树结构复选框选中回调
    const checkBtn = (data, flag) => {
      console.log('accept check events', data)
      // 单选
      if (singleSelectUser.value) {
        chooseList.value = [data]
        return
        // eslint-disable-next-line brace-style
      }
      // 部门外部人员
      else if (selectType.value === 1) {
        // 取消选中
        if (flag) {
          // 选中人员
          if (data.type === 1) {
            const index = hasInChooseList(data)
            chooseList.value.splice(index, 1)
          } else {
            childrenList.value = []
            if (data.children) {
              getSonMember(data.children)
            }
            childrenList.value.forEach(item => {
              const index = hasInChooseList(item)
              if (index > -1) {
                chooseList.value.splice(index, 1)
              }
            })
          }
          // eslint-disable-next-line brace-style
        }
        // 选中
        else {
          // 选中人员
          if (data.type === 1) {
            chooseList.value.push(data)
          } else {
            childrenList.value = []
            if (data.children) {
              getSonMember(data.children)
            }
            chooseList.value = chooseList.value.concat(childrenList.value)
          }
        }
        // eslint-disable-next-line brace-style
      }
      // 都不是
      else {
        const tempData = JSON.parse(JSON.stringify(data))
        const index = hasInChooseList(tempData)
        if (index > -1) {
          chooseList.value.splice(index, 1)
        } else {
          chooseList.value.push(tempData)
        }
        console.log(data, chooseList.value)
      }
      removeRepeatChooseList()
      setChoose()
    }
    const sonData = ref({})
    // 获取子节点
    const getSonTree = (list, data) => {
      list.forEach(item => {
        if (item.id + '' + item.type === data.id + '' + data.type) {
          sonData.value = item
        }
        if (item.children && item.children.length) {
          getSonTree(item.children, data)
        }
      })
    }
    const rowClick = (data) => {
      if (data.type === 1) {
        check(data)
      }
    }
    const check = (data) => {
      if (data.type === 2) {
        getSonTree(treeList.value, data)
        console.log('获取子节点内容--', sonData.value)
        let tempFlag
        if (selectedKeys.value.includes(data.id + '' + data.type)) {
          tempFlag = true
        } else {
          tempFlag = false
        }
        memberTree.value.updateKeys(sonData.value, tempFlag)
      } else {
        let tempFlag
        if (selectedKeys.value.includes(data.id + '' + data.type)) {
          tempFlag = true
        } else {
          tempFlag = false
        }
        memberTree.value.updateKeys(data, tempFlag)
      }
    }
    return {
      highText,
      rowClick,
      clearAll,
      expandedKeys,
      title,
      showType,
      getRoleNameList,
      close,
      sure,
      showSelectRole,
      removeMember,
      memberTree,
      check,
      hasChooseCurrentItem,
      clear,
      searchListLocal,
      keyword,
      checkBtn,
      nodeClick,
      // 分割线
      treeList,
      chooseList,
      selectedKeys,
      inputKeyWord,
      roleList
    }
  },
  props: selectMemberProps
}
</script>
<style>
.key-word {
  color: #4791FE
}
</style>
