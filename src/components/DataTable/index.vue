<template>
  <el-table :data="tableData">
    <ColumnTree 
      v-for="item in columns" 
      :key="item.prop" 
      :column="item"
    ></ColumnTree>
  </el-table>
</template>
<script lang='ts' setup>
  import { Column } from '@/typings/table';
  import ColumnTree from './ColumnTree.vue';
  interface Props {
    columns: Column[];
    tableData: any[];
  }
  withDefaults(defineProps<Props>(), {})
</script>
<style lang='scss' scoped> 
  
</style>