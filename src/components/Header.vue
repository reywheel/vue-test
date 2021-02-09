<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <router-link :to="{ name: 'home' }" v-slot="{ navigate, href }" custom>
      <a
        :href="href"
        class="header__logo el-menu-item el-menu-item--left"
        @click="navigate"
      >
        Test
      </a>
    </router-link>
    <router-link :to="{ name: 'login' }" v-slot="{ navigate }" custom>
      <el-menu-item @click="navigate">Вход</el-menu-item>
    </router-link>
    <el-menu-item @click="navigate">Выйти</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.el-menu--horizontal > .el-menu-item {
  float: right;
}

.el-menu--horizontal > .el-menu-item--left {
  float: left;
  font-size: 20px;
  color: #000000;
}
</style>
