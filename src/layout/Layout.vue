<template>
  <el-container>
      <Aside :hasCollapse="hasCollapse"></Aside>
    <el-container class="container">
      <el-header><Header></Header></el-header>
      <el-main>
        <router-view></router-view>
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
  .el-header {
    padding: 0;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    z-index: 1000;
    /* position: sticky;
    top: 0; */
    background-color: #fff;
  }
  .container {
    height: 100vh;
    flex: 1;
    .el-main {
      padding: 10px;
      overflow: auto;
      &::-webkit-scrollbar{
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: lightgray;
        height: 50px;
        border-radius: 5px;
      }
    }
  }
</style>