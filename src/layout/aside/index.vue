<template>
  <el-scrollbar>
    <el-menu
      :collapse="hasCollapse"
      :collapse-transition="true"
      :unique-opened="true"
      :router="true"
      :default-active="activePath"
      :background-color="asideBgColor"
      :active-text-color="asideTextColor"
    >
      <!-- <h3 v-show="!hasCollapse" class="system-title">管理系统</h3> -->
      <MenuTree 
        v-for="item in menusList" 
        :key="item.id" 
        :menuItem="item"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script lang='ts' setup>
  import { ref, computed } from 'vue';
  import MenuTree from './MenuTree.vue';
  import { Route } from '@/typings/route';
  import { useRoute } from 'vue-router';
  const route = useRoute()
  interface Props {
    hasCollapse: boolean;
    menusList: Route[];
  }
  withDefaults(defineProps<Props>(), {
    hasCollapse: false,
  })
  const asideBgColor = ref<string>('#fff');
  const asideTextColor = ref<string>('#626aef');
  const activePath = computed(() => {
    return route.path
  })
</script>
<style lang='scss' scoped>
  .el-scrollbar {
    height: 100%;
    background-color: v-bind(asideBgColor);
    border-right: 1px solid #eee;
    .el-menu {
      height: 100%;
      border-right: none;
      .system-title {
        padding: 0px;
        font-size: 18px;
        margin: 6px;
        text-align: center;
        color: v-bind(asideTextColor);
      }
    }
    .el-menu:not(.el-menu--collapse) {
      width: 220px;
    }
  }
</style>