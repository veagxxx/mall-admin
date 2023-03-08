<template>
  <el-table-column
    :type="column.type"
    :prop="column.prop"
    :label="column.label"
    :align="column.align || 'center'"
    :width="column.width"
    :fixed="column.fixed || false"
    :index="column.index"
    :formatter="column.formatter"
  >
    <template #default="scope" v-if="column.list">
      <el-button 
        v-for="btn in column.list" 
        :type="btn.type"
        :size="btn.size"
        @click="btn.cb && btn.cb(scope.row)"
      >
        {{ btn.text }}
      </el-button>
    </template>
    <template #default="scope" v-else-if="column.render">
      <el-tag :type="column.render.type"> 
        {{ scope.row[column.prop] }}
      </el-tag>
    </template>
    <template v-if="column.children">
      <ColumnTree 
        v-for="item in column.children" 
        :key="item.prop" :column="item"
      ></ColumnTree>
    </template>
  </el-table-column>
</template>
<script lang='ts' setup>
  import { Column } from '@/typings/table';
  interface Props {
    column: Column;
  }
  withDefaults(defineProps<Props>(), {})
</script>
<style lang='scss' scoped>
  
</style>