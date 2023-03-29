<template>
  <div class="setting">
    <Echart :option="option"/>
  </div>
</template>
<script lang='ts' setup>
  import Echart from '@/components/echarts/index.vue';
  import { computed } from 'vue';
  const option: any = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
</script>
<style lang='scss' scoped>
  .setting {
    @include main-box;
    height: 300px;
  }
</style>