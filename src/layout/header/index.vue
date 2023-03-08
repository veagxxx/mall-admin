<template>
  <div class="header">
    <div class="header-tool">
      <div class="header-tool__fold" @click="onCollapse">
        <el-icon>
          <component :is="hasCollapse ? 'Expand' : 'Fold'"></component>
        </el-icon>
      </div>
    </div>
    <div class="header-tool">
      <div class="header-tool__item">
        <el-tooltip place="bottom-start" content="消息通知">
          <el-icon><bell-filled /></el-icon>
        </el-tooltip>
      </div>
      <div class="header-tool__item">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="UserFilled">个人中心</el-dropdown-item>
              <el-dropdown-item :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { SwitchButton, UserFilled } from "@element-plus/icons-vue";
  import { useSettingStore } from '@/store/index';
  defineProps({
    hasCollapse: Boolean
  })
  const store = useSettingStore();
  const onCollapse = () => {
    store.updateCollapse()
  }
</script>
<style lang='scss' scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 16px;
    .el-icon {
      font-size: 1.2em;
    }
    .header-tool, .header-tool {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .header-tool__fold {
      cursor: pointer;
    }
    .header-tool__item {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 12px;
    }
  }
</style>