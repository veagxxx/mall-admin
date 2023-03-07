<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left__fold" @click="onCollapse">
        <el-icon><Fold /></el-icon>
      </div>
    </div>
    <div class="header-right">
      <div class="header-right__item">
        <el-tooltip place="bottom-start" content="消息通知">
          <el-icon><bell-filled /></el-icon>
        </el-tooltip>
      </div>
      <div class="header-right__item">
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
  import { useStore } from '@/store/index';
  const store = useStore();
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
    .header-left, .header-right {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .header-left__fold {
      cursor: pointer;
    }
    .header-right__item {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 12px;
    }
  }
</style>