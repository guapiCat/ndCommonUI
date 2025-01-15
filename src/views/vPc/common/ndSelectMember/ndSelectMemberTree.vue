<template>
  <nd-select-member-tree-node :data="data" :expand-keys="expandKeys" :select-keys="selectKeys"
                               :check-strictly="checkStrictly"></nd-select-member-tree-node>
</template>

<script>
import { ref, toRefs, getCurrentInstance, provide, readonly, onBeforeMount } from 'vue'
import ndSelectMemberTreeNode from './ndSelectMemberTreeNode.vue'
import './ndSelectMember.css'
import '../styles/init.less'
import { eventBus } from '../EventBus'

export default {
  name: 'ndSelectMemberTree',
  components: { ndSelectMemberTreeNode },
  setup (props, { emit }) {
    const { defaultSelectedKeys, isSingleSelect, checkStrictly, data } = toRefs(props)
    // 默认选中全局keys
    const selectKeys = ref([])
    selectKeys.value = defaultSelectedKeys.value
    eventBus.on('selectKeys', (payload) => {
      selectKeys.value = payload.concat([])
    })
    // 更新默认选中全局keys
    const updateKeys = (item, isHalf) => {
      let flag
      if (selectKeys.value.includes(item.id + '' + item.type)) {
        flag = true
      } else {
        flag = false
      }
      if (isHalf === 'half') {
        flag = false
      }
      if (isHalf === 'remove') {
        flag = true
      }
      // 选人
      if (props.selectType === 1) {
        // 取消选中
        if (flag) {
          if (isSingleSelect.value) {
            return
          }
          const index = selectKeys.value.findIndex(item0 => {
            return item0 === item.id + '' + item.type
          })
          selectKeys.value.splice(index, 1)
          if (item.type === 2) {
            if (item.children && item.children.length) {
              deleteSonMember(item.children)
            }
          }
          // eslint-disable-next-line brace-style
        }
        // 选中
        else {
          if (isSingleSelect.value) {
            selectKeys.value = [item.id + '' + item.type]
          } else {
            selectKeys.value.push(item.id + '' + item.type)
            if (item.type === 2) {
              if (item.children) {
                chooseSonMember(item.children)
              }
            }
          }
        }
        // eslint-disable-next-line brace-style
      }
      // 单选成员，不能选择部门
      else {
        // 取消选中
        if (flag) {
          if (isSingleSelect.value) {
            selectKeys.value = []
            // eslint-disable-next-line brace-style
          }
          // 不联动
          else if (checkStrictly.value) {
            // eslint-disable-next-line brace-style
            const index = selectKeys.value.findIndex((item0) => {
              return item0 === item.id + '' + item.type
            })
            console.log(index)
            selectKeys.value.splice(index, 1)
            // eslint-disable-next-line brace-style
          }
          // 联动
          else if (!checkStrictly.value) {
            const index = selectKeys.value.findIndex((item0) => {
              return item0 === item.id + '' + item.type
            })
            console.log(index)
            selectKeys.value.splice(index, 1)
            console.log(selectKeys.value)
            if (item.children && item.children.length) {
              deleteAllChildrenUuid(item.children)
            }
          }
          // eslint-disable-next-line brace-style
        }
        // 选中
        else {
          // 不联动（选人、选部门分开选）
          if (checkStrictly.value) {
            selectKeys.value.push(item.id + '' + item.type)
            // eslint-disable-next-line brace-style
          }
          // 单选
          else if (isSingleSelect.value) {
            selectKeys.value = [item.id + '' + item.type]
            // eslint-disable-next-line brace-style
          }
          // 联动
          else if (!checkStrictly.value) {
            allChildrenList.value = []
            selectKeys.value.push(item.id + '' + item.type)
            if (item.children) {
              selectAllChildrenUuid(item.children)
            }
            selectKeys.value = Array.from(new Set(selectKeys.value))
            console.log('最后的值--', selectKeys.value)
          }
        }
      }
      selectKeys.value = Array.from(new Set(selectKeys.value))
      console.log('selectKeys--', selectKeys.value)
      eventBus.emit('selectKeys', selectKeys.value)
      emit('check', item, flag)
    }
    const allChildrenList = ref([])
    provide('selectKeys', readonly(selectKeys.value))
    provide('updateSelectKeys', updateKeys)
    // 默认展开
    const expandKeys = ref([])
    // 更新展开
    const updateExpandKeys = (item, flag) => {
      console.log('updateExpandKeys', item, flag)
      if (flag) {
        const index = expandKeys.value.findIndex((item0) => {
          return item0 === item.id + '' + item.type
        })
        expandKeys.value.splice(index, 1)
      } else {
        expandKeys.value.push(item.id + '' + item.type)
      }
      console.log('expandKeys', expandKeys.value)
      eventBus.emit('expandKeys', expandKeys.value)
    }
    provide('expandKeys', readonly(expandKeys.value))
    provide('updateExpandKeys', updateExpandKeys)
    // 提供是否是单选
    provide('isSingleSelect', props.isSingleSelect)

    // ----分割线
    const { proxy } = getCurrentInstance()
    console.log(proxy)
    const nodeClick = (item) => {
      emit('nodeClick', item)
    }
    // ref调用设置keys
    const setCheckedKeys = (keys) => {
      console.log('主动调用keys', keys)
      selectKeys.value = keys
      eventBus.emit('selectKeys', selectKeys.value)
    }
    const getCheckedKeys = () => {
      return selectKeys.value
    }
    const setExpandKeys = (keys) => {
      console.log('setExpandKeys', keys)
      expandKeys.value = keys
      eventBus.emit('expandKeys', expandKeys.value)
    }
    const nodesTemp = ref([])
    // ref获取所有已选中的节点内容
    const getCheckedNodes = () => {
      nodesTemp.value = []
      setCheckedNode(data.value)
      console.error('被选中的所有节点内容', nodesTemp.value)
      return nodesTemp.value
    }
    const setCheckedNode = (list) => {
      list.forEach(item => {
        if (selectKeys.value.includes(item.id + '' + item.type)) {
          console.log('item', item)
          nodesTemp.value.push(item)
        }
        if (item.children && item.children.length) {
          setCheckedNode(item.children)
        }
      })
    }
    // 选中子元素uuid
    const selectAllChildrenUuid = (list) => {
      list.forEach(item => {
        selectKeys.value.push(item.id + '' + item.type)
        allChildrenList.value.push(item)
        if (item.children && item.children.length) {
          selectAllChildrenUuid(item.children)
        }
      })
    }
    // 选择子成员
    const chooseSonMember = list => {
      list.forEach(item => {
        selectKeys.value.push(item.id + '' + item.type)
        if (item.children && item.children.length) {
          chooseSonMember(item.children)
        }
      })
    }
    // 删除子成员
    const deleteSonMember = list => {
      list.forEach(item => {
        const index = selectKeys.value.findIndex(item0 => {
          return item0 === item.id + '' + item.type
        })
        if (index > -1) {
          selectKeys.value.splice(index, 1)
        }
        if (item.children && item.children.length) {
          deleteSonMember(item.children)
        }
      })
    }
    // 删除子元素uuid
    const deleteAllChildrenUuid = (list) => {
      list.forEach(item => {
        const index = selectKeys.value.findIndex((item0) => {
          return item0 === item.id + '' + item.type
        })
        if (index > -1) {
          selectKeys.value.splice(index, 1)
        }
        if (item.children && item.children.length) {
          deleteAllChildrenUuid(item.children)
        }
      })
    }
    onBeforeMount(() => {

    })
    return {
      updateKeys,
      setExpandKeys,
      getCheckedKeys,
      getCheckedNodes,
      setCheckedKeys,
      nodeClick,
      expandKeys,
      selectKeys
    }
  },
  props: {
    /**
     * 1 只能选择成员，不能选择部门 选择部门是选择当前部门下的所有可用成员
     * 2 单选
     */
    selectType: {
      type: Number,
      default: 0,
      required: false
    },
    // 是否不联动
    checkStrictly: {
      type: Boolean,
      default: false
    },
    // 单选
    isSingleSelect: {
      type: Boolean,
      default: false
    },
    // 默认选中的keys集合
    defaultSelectedKeys: {
      type: Array,
      default () {
        return []
      }
    },
    // 数据源
    data: {
      type: Array,
      default () {
        return []
      }
    },
    // 默认展开的数组集合
    defaultExpandKeys: {
      type: Array,
      default () {
        return []
      }
    },
    // 默认属性
    defaultProps: {
      type: Object,
      default () {
        return {
          id: 'id',
          label: 'label',
          children: 'children'
        }
      }
    }
  }
}
</script>

<style scoped>
/*@import "../styles/init";*/
/*@import "ndSelectMember";*/
</style>
