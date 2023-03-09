<template>
  <div class="home-page">
    <DataTable :tableData="tableData" :columns="columns" :height="height - 68"/>
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
  import { Column } from '@/typings/table';
  import DataTable from '@/components/DataTable/index.vue';
  import { useHeight } from '@/common/hooks/index';
  import { ref } from 'vue';
  const height = useHeight();
  const tableData: any = [
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
    { name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' }, 
  ]
  const columns: Column[] = [
    {
      type: 'index',
      label: '序号',
      width: 60
    },
    {
      prop: 'name',
      align: 'center',
      label: '名字',
    },
    {
      prop: 'title',
      align: 'center',
      label: '称号',
    },
    {
      prop: 'skill',
      align: 'center',
      label: '大招',
      formatter: (row: Column, column: number, value: string, index: number) => {
        return value
      }
    },
    {
      prop: 'position',
      align: 'center',
      label: '位置',
      render: {
        type: 'info',
      }
    },
    {
      align: 'center',
      label: '操作',
      fixed: 'right',
      list: [
        {
          text: '编辑',
          type: 'primary',
          size: 'small',
          cb: (row: Column) => editRow(row)
        },
        {
          text: '删除',
          type: 'danger',
          size: 'small',
          cb: (row: Column) => deleteRow(row)
        },
      ]
    },
  ]
  const editRow = (row: Column) => {
    console.log('editRow', row)
  }
  const deleteRow = (row: Column) => {
    console.log('deleteRow', row)
  }
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