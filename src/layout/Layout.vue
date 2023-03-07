<template>
  <el-container class="container">
    <Aside :hasCollapse="hasCollapse"></Aside>
    <el-container class="right-container">
      <el-header><Header></Header></el-header>
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main> 
    </el-container>
  </el-container>
  
</template>
<script lang='ts' setup>
  import Header from './header/index.vue';
  import Aside from './aside/index.vue';
  import { useStore } from '@/store/index';
  import { computed } from 'vue';
  const store = useStore();
  const hasCollapse = computed(() => {
    return store.hasCollapse;
  })
</script>
<style lang='scss' scoped>
.container {
  height: 100%;
  .el-header {
    padding: 0;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    background-color: #fff;
  }
  .right-container {
    height: 100%;
    .el-main {
      padding: 10px;
      overflow: auto;
    }
  }
}
  
</style>