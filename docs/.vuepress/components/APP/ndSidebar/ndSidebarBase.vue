<template>
  <div class="flex">
    <nd-app-sidebar v-model="active" @change="onChange">
      <nd-app-sidebar-item title="基础标签" />
      <nd-app-sidebar-item title="红点标签" :dot="true" />
      <nd-app-sidebar-item title="徽标标签" badge="12" />
      <nd-app-sidebar-item title="禁用标签" disabled />
      <nd-app-sidebar-item title="徽标props" badge="12" :badgeProps="badgeProps" />
    </nd-app-sidebar>

    <div class="test-index">下标index：{{ active }}</div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import ndAppSidebar from '../../../../../src/packages/APP/nd-sidebar/src/nd-sidebar.vue';
import ndAppSidebarItem from '../../../../../src/packages/APP/nd-sidebar-item/src/nd-sidebar-item.vue';

export default {
  name: '',
  components: { ndAppSidebar, ndAppSidebarItem },
  setup() {
    const data = reactive({
      active: 1,

      badgeProps: {
        color: 'blue',
        position: 'top-left',
      }
    });

    onBeforeMount(() => {});
    onMounted(() => {});

    const onChange = (index) => {
      console.log('标签index, active=====', index, data.active);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      onChange,
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.test-index {
  padding: 40px;
}
</style>