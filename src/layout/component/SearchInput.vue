<template>
  <div class="search-input__wrapper" @click="onEnlarge">
    <span class="search-input__prefix">
      <span class="prefix-icon">
        <el-icon><Search /></el-icon>
      </span>
    </span>
    <input 
      ref="inputRef"
      class="search-input__inner"
      :value="modelValue" 
      :placeholder="placeholder" 
      @input="(e: any) => onInput(e.target.value)" 
    />
  </div>
</template>
<script lang='ts' setup>
  import { reactive, ref } from 'vue';
  interface Props {
    modelValue: string;
    placeholder?: string;
    showClose?: boolean;
    size?: 'default' | 'small' | 'large';
  }
  const props = withDefaults(defineProps<Props>(), {
    placeholder: '搜索',
    showClose: false,
    size: 'default',
  })
  const styleMap = {
    default: { minWidth: '24px', width: '250px', height: '28px', fontSize: '14px', radius: '50%' },
    small: { minWidth: '24px', width: '200px', height: '24px', fontSize: '12px', radius: '50%' },
    large: { minWidth: '24px', width: '250px', height: '32px', fontSize: '16px', radius: '50%' },
  }
  const inputRef = ref();
  const style = reactive(styleMap[props.size]);
  const emit = defineEmits(['update:modelValue'])
  const onInput = (value: string) => {
    emit('update:modelValue', value)
  }
  const onClear = () => {
    emit('update:modelValue', '')
  }
  const onEnlarge = () => {
    console.log('zzz')
    inputRef.value.focus();
  }
</script>
<style lang='scss' scoped>
  .search-input__wrapper {
    position: relative;
    overflow: hidden;
    width: v-bind('style.minWidth');
    height: v-bind('style.height');
    line-height: v-bind('style.height');
    /* border: 1px solid #ccc; */
    padding: 2px 4px 2px 4px;
    display: flex;
    align-items: center;
    border-radius: 16px;
    transition: all 0.5s;
    &:focus-within {
      border: 1px solid var(--el-color-primary);
      width: v-bind('style.width');
    }
    .search-input__prefix {
      cursor: pointer;
    }
    .search-input__prefix {
      display: inline-block;
      height: 100%;
      line-height: v-bind('style.height');
      width: v-bind('style.minWidth');
      margin-right: -4px;
      .prefix-icon {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        line-height: v-bind('style.height');
      }
    }
    .search-input__inner {
      min-width: 0px;
      flex: 1 1 0px;
      height: 100%;
      color: #333;
      outline: none;
      margin: 0;
      border: none;
      font-size: v-bind('style.fontSize');
      transition: all 0.5s;
    }
  }
</style>