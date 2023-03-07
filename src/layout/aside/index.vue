<template>
  <el-scrollbar>
    <el-menu
      :collapse="hasCollapse"
      :collapse-transition="true"
      :unique-opened="true"
      :router="true"
      :default-active="$route.path"
      :background-color="asideBgColor"
      text-color="#fff"
    >
      <h3 v-show="!hasCollapse" class="system-title">管理系统</h3>
      <el-menu-item index="2">
        <el-icon><HomeFilled /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-sub-menu index="/index">
        <template #title>
          <el-icon><location /></el-icon>
          <span>其他菜单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>菜单一</span>
            </template>
          </el-menu-item>
          <el-menu-item index="1-2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>菜单二</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="1-3">
            <template #title>
              <el-icon><location /></el-icon>
              <span>菜单三</span>
            </template>
          </el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>
            <el-icon><location /></el-icon>
            <span>菜单四</span>
          </template>
          <el-menu-item index="1-4-1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>菜单4-1</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Coin /></el-icon>
        <template #title>商品管理</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>订单管理</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>会员管理</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script lang='ts' setup>
  import { ref } from 'vue';

  defineProps({
    hasCollapse: Boolean
  })
  const asideBgColor = ref<string>('#545c64');
</script>
<style lang='scss' scoped>
  .el-scrollbar {
    height: 100%;
    background-color: v-bind(asideBgColor);
    .el-menu {
      height: 100%;
      border-right: none;
      .system-title {
        padding: 0px;
        font-size: 18px;
        margin: 6px;
        text-align: center;
        color: #fff;
        transition: none;
      }
    }
    .el-menu:not(.el-menu--collapse) {
      width: 220px;
    }
  }
</style>