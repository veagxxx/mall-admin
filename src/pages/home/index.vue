<template>
  <div class="home-page">
    <el-table-V2
      :data="tableData"
      :columns="columns"
      :width="width - 24"
      :height="height - 68"
      fixed
    ></el-table-V2>
    <div class="pagination">
      <el-pagination 
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
        @size-change="onSizeChange"
        @current-change="onCurrentChange" 
      />
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { useWidthHeight } from '@/common/hooks/index';
  import { onMounted, ref } from 'vue';
  import { columns, tableData } from '@/mock/table';
  const { width, height } = useWidthHeight();
  const currentPage = ref<number>(1);
  const pageSize = ref<number>(20);
  const onSizeChange = (value: number) => {
    console.log('onSizeChange', value)
  }
  const onCurrentChange = (value: number) => {
    console.log('onCurrentChange', value)
  }
</script>
<style lang='scss' scoped>
  .home-page {
    height: 100%;
    margin: 6px;
    padding: 6px;
    background: #fff;
    .pagination {
      padding: 6px;
    }
  }
</style>