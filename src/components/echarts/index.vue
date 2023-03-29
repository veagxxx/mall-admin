<template>
  <div ref="chartRef"></div>
</template>
<script setup lang='ts'>
  import { onMounted, ref, onBeforeUnmount, watch } from 'vue';
  import echarts, { ECOption } from '@/utils/echarts';
  interface Props {
    option: ECOption;
  }
  const props = withDefaults(defineProps<Props>(), {
    option: {} as any
  })
  const chartRef = ref<HTMLElement>();
  const chart = ref();
  const initChart = () => {
    if (chart.value !== undefined) {
      chart.value.dispose();
    }
    chart.value = echarts.init(chartRef.value as HTMLElement);
    chart.value.setOption(props.option);
  }
  onMounted(() => {
    initChart();
    window.addEventListener('resize', chart.value.resize());
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', chart.value.resize());
  })
  watch(() => props.option, () => {
    initChart();
  })
</script>
<style lang='scss' scoped>

</style>