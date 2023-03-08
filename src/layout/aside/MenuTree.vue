<template>
  <el-menu-item v-if="!menuItem.children" :index="menuItem.path">
    <el-icon>
      <component :is="menuItem.icon"></component>
    </el-icon>
    <template #title>
      <span>{{ menuItem?.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu v-else :index="menuItem.path">
    <template #title>
      <el-icon>
        <component :is="menuItem.icon"></component>
      </el-icon>
      <span>{{ menuItem?.title }}</span>
    </template>
    <el-menu-item-group 
      v-for="(item, index) in menuItem.children" 
      :key="item.id"
    >
      <MenuTree :menuItem="item"></MenuTree>
    </el-menu-item-group>
  </el-sub-menu>
</template>
<script lang='ts' setup>
  defineProps({
    menuItem: {
      type: Object,
      default: () => {}
    }
  })
</script>
<style lang='scss' scoped>
  
</style>