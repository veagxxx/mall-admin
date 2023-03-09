<template>
  <el-table 
    :data="tableData" 
    :height="height" 
    :maxHeight="maxHeight"
    :border="border"
    :stripe="stripe"
    :size="size"
  >
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
    height?: number | string;
    maxHeight?: number | string;
    border?: boolean;
    stripe?: boolean;
    size?: 'default' | 'small' | 'large';
  }
  withDefaults(defineProps<Props>(), {})
</script>
<style lang='scss' scoped> 
  
</style>