<template>
  <ul>
    <li v-for="(item,index) in data" :key="index" class="select" style="box-sizing: border-box;">
      <a class="person-node" @click="nodeClick(item)" v-if="!item.disabled">
        <b v-for="(item,index) in level" :key="index" :title="item"></b>
        <!--todo 复选框-->
        <!--全选-->
        <!--                <i class="ico-total-depart" v-if="level===0"></i>-->
        <i class="node-checkbox node-checkbox-s"
           v-if="childNodeHasSelected(item)==3&&!item.disabled&&!isSingleSelect"
           @click.stop="updateSelectKeys(item)"></i>
        <i class="node-checkbox"
           v-if="childNodeHasSelected(item)==1&&!item.disabled&&!isSingleSelect"
           @click.stop="updateSelectKeys(item)"></i>
        <!--半选-->
        <i class="node-checkbox halfChecked"
           @click.stop="updateSelectKeys(item,'half')"
           v-if="childNodeHasSelected(item)==2&&!item.disabled&&!isSingleSelect"></i>
        <!--v-if="!item.disabled&&!isSingleSelect&&childNodeHasSelected(item)===1"-->
        <!--复选框禁用-->
        <!--disabled:1 禁用并且不选择 2 禁用并且选择-->
        <i v-if="item.disabled==1&&!isSingleSelect" class="node-checkbox node-checkbox-no"
           style="cursor: no-drop"/>
        <i v-if="item.disabled==2&&!isSingleSelect" class="node-checkbox node-checkbox-s-no"
           style="cursor: no-drop"/>

        <!--todo 单选框-->
        <i v-if="selectKeys.includes(item.id+''+item.type)&&!item.disabled&&isSingleSelect&&item.type===1"
           class="node-radiobox node-radiobox-s"
           @click.stop="updateSelectKeys(item)"/>
        <i v-if="!selectKeys.includes(item.id+''+item.type)&&!item.disabled&&isSingleSelect&&item.type===1"
           class="node-radiobox"
           @click.stop="updateSelectKeys(item)"/>
        <!--单选框禁用-->
        <!--disabled:1 禁用并且不选择 2 禁用并且选择-->
        <i v-if="item.disabled==1&&isSingleSelect" class="node-radiobox node-radiobox-no"
           style="cursor: no-drop"/>
        <i v-if="item.disabled==2&&isSingleSelect" class="node-radiobox node-radiobox-s-no"
           style="cursor: no-drop"/>
        <!--todo 上下箭头-->
        <!-- &&(item.children&&item.children.length>0) -->
        <i v-if="expandKeys.includes(item.id+''+item.type)&&item.type===2" class="node-switch open"
           @click.stop="updateExpandKeys(item,true)"
           :style="{'marginLeft':(item.type===2&&isSingleSelect)?'5px':0,'marginRight':(item.type===2&&isSingleSelect)?'20px':''}"/>
        <i v-if="!expandKeys.includes(item.id+''+item.type)&&item.type===2" class="node-switch close"
           @click.stop="updateExpandKeys(item,false)"
           :style="{'marginLeft':(item.type===2&&isSingleSelect)?'5px':0,'marginRight':(item.type===2&&isSingleSelect)?'20px':''}"/>
        <i v-if="item.type===2&&!item.disabled" class="ico-depart"/>
        <!--头像-->
        <img v-if="item.type===1&&item.avatar"
             style="width: 16px;height: 16px;margin-right: 8px;vertical-align: middle;display: inline-block"
             :src="item.avatar">
        <img v-if="item.type===1&&!item.avatar"
             style="width: 16px;height: 16px;margin-right: 8px;vertical-align: middle;display: inline-block"
             src="../images/default-person-pic.png">
        <span :title="item.name">{{ item.name }}</span>
      </a>
      <ul v-show="item.children&&item.children.length&&expandKeys.includes(item.id+''+item.type)"
          style="width: 100%">
        <nd-select-member-tree-node
          :expand-keys="expandKeys"
          :select-keys="selectKeys"
          :data="item.children"
          :level="localLevel" :checkStrictly="checkStrictly"
        />
      </ul>
    </li>
  </ul>
</template>

<script>
import { inject, onMounted, ref, toRefs } from 'vue'
import './ndSelectMember.css'
import '../styles/init.less'
import { eventBus } from '../EventBus'

export default {
  name: 'ndSelectMemberTreeNode',
  setup (props) {
    const { expandKeys, selectKeys } = toRefs(props)
    // 所有子元素是否都被选中
    const childNodeHasSelected = data => {
      // 1：没有选中 2：半选 3：选中
      // 不联动
      if (props.checkStrictly) {
        if (selectKeys.value.includes(data.id + '' + data.type)) {
          return 3
        } else {
          return 1
        }
      }
      // 没有子元素的元素 （包含  空部门与用户）
      if (!data.children || !data.children.length) {
        if (selectKeys.value.includes(data.id + '' + data.type)) {
          return 3
        } else {
          return 1
        }
        // eslint-disable-next-line brace-style
      }
      // 有子元素
      else {
        // 所有子元素
        const allChildKeys = []
        childNodes(data.children, allChildKeys)
        if (allChildKeys.length === 0) {
          if (selectKeys.value.includes(data.id + '' + data.type)) {
            return 3
          } else {
            return 1
          }
        }
        // 当前选中的子元素个数
        let includesNum = 0
        allChildKeys.forEach(item0 => {
          if (selectKeys.value.includes(item0)) {
            includesNum++
          }
        })
        // 子元素一个没有选中
        if (includesNum === 0) {
          if (selectKeys.value.includes(data.id + '' + data.type)) {
            const index0 = selectKeys.value.findIndex(item0 => {
              return item0 === (data.id + '' + data.type)
            })
            if (index0 > -1) {
              selectKeys.value.splice(index0, 1)
            }
            eventBus.emit('selectKeys', selectKeys.value)
          }
          return 1
          // eslint-disable-next-line brace-style
        }
        // 子节点选中了多个
        else if (includesNum < allChildKeys.length) {
          return 2
          // eslint-disable-next-line brace-style
        }
        // 子元素全部选中
        else if (includesNum === allChildKeys.length) {
          // 如果子元素全部被选中，并且选中列表中不包含当前元素，当前元素选中
          if (!selectKeys.value.includes(data.id + '' + data.type)) {
            selectKeys.value.push(data.id + '' + data.type)
            eventBus.emit('selectKeys', selectKeys.value)
          }
          return 3
        }
      }
    }
    // 所有可用子元素的keys
    const childNodes = (list, allChildKeys) => {
      list.forEach(item => {
        if (!item.disabled) {
          allChildKeys.push(item.id + '' + item.type)
        }
        // allChildKeys.push(item.id + '' + item.type)
        if (item.children && item.children.length) {
          childNodes(item.children, allChildKeys)
        }
      })
    }
    // 更新选择keys
    const updateSelectKeys = inject('updateSelectKeys')
    // 更新展开的keys
    const updateExpandKeys = inject('updateExpandKeys')
    // 是否是单选
    const isSingleSelect = inject('isSingleSelect', false)
    // 引用props
    const { level } = toRefs(props)
    const localLevel = ref(0)
    localLevel.value = level.value + 1
    // 节点被点击
    const nodeClick = item => {
      if (item.type === 2) {
        if (expandKeys.value.includes(item.id + '' + item.type)) {
          updateExpandKeys(item, true)
        } else {
          updateExpandKeys(item, false)
        }
      } else if (item.type === 1) {
        if (selectKeys.value.includes(item.id + '' + item.type)) {
          updateSelectKeys(item, true)
        } else {
          updateSelectKeys(item, false)
        }
      }
    }
    onMounted(() => {
    })
    return {
      nodeClick,
      childNodeHasSelected,
      localLevel,
      updateSelectKeys,
      updateExpandKeys,
      isSingleSelect
    }
  },
  props: {
    // 数据源
    data: {
      type: Array,
      default () {
        return []
      }
    },
    // 树级别
    level: {
      type: Number,
      default: 0
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    expandKeys: {
      type: Array,
      default () {
        return []
      }
    },
    selectKeys: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
