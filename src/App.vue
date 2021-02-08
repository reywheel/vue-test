<template>
  <el-container>
    <el-header>
      <AppHeader />
    </el-header>
    <el-main class="app__main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import AppHeader from "@/components/Header";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
.app__main {
  height: calc(100vh - 60px);
}
</style>
