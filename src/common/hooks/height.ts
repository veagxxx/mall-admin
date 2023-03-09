import { onBeforeUnmount, onMounted, ref } from "vue"
// 获取 el-main 内容的高度
export const useHeight = () => {
  const mainHeight = ref<number>(window.innerHeight - 60);
  const updateHeight = () => {
    mainHeight.value = window.innerHeight - 60;
  }
  onMounted(() => {
    window.addEventListener('resize', updateHeight);
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateHeight);
  })

  return mainHeight;
}