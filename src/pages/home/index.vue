<template>
  <div class="home-page">
    <DataTable :tableData="tableData" :columns="columns"/>
  </div>
</template>
<script lang='ts' setup>
  import { Column } from '@/typings/table';
  import DataTable from '@/components/DataTable/index.vue';
  const tableData: any = [
    {
      name: '佛耶格',
      title: '破败之王',
      skill: '痛贯天灵',
      position: '打野',
    }, 
    {
      name: '佛耶格',
      title: '破败之王',
      skill: '痛贯天灵',
      position: '打野',
    },
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
</script>
<style lang='scss' scoped>
  .home-page {
    height: 100%;
    margin: 6px;
  }
</style>