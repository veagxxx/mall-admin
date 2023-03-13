<template>
  <div class="home-page">
    <DataTable
      :height="height - 64"
      :columns="tableData.columns"
      :tableData="tableData.data"
      :loading="loading"
      pagination
      :currentPage="currentPage"
      :pageSize="pageSize"
      :pageSizes="[10, 20, 50, 100]"
      :total="100"
      @sizeChange="onSizeChange"
      @currentChange="onCurrentChange"
    />
  </div>
</template>
<script lang='ts' setup>
  import { useWidthHeight } from '@/common/hooks/index';
  import { onMounted, reactive, ref } from 'vue';
  import { columns } from '@/mock/table';
  import { testApi } from '@/api/test';
  import DataTable from '@/components/DataTable/index.vue';
  onMounted(() => {
    getData()
  })
  const { height } = useWidthHeight();
  const loading = ref<boolean>(false);
  const currentPage = ref<number>(1);
  const pageSize = ref<number>(20);
  const tableData = reactive<any>({
    data: [],
    columns: columns,
  })
  const getData = async () => {
    loading.value = true;
    const res = await testApi({
      pageIndex: currentPage.value,
      pageSize: pageSize.value,
    });
    tableData.data = res.data;
    loading.value = false;
  }
  const onSizeChange = (value: number) => {
    pageSize.value = value
  }
  const onCurrentChange = (value: number) => {
    currentPage.value = value
  }
</script>
<style lang='scss' scoped>
  .home-page {
    height: 100%;
    margin: 6px;
    padding: 6px;
    background: #fff;
  }
</style>