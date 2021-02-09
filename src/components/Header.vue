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
    <template v-if="isAnonymous">
      <router-link
        :to="{ name: 'login' }"
        v-slot="{ navigate, isActive }"
        custom
      >
        <div
          class="el-menu-item"
          @click="navigate"
          :class="{ 'is-active': isActive }"
        >
          Войти
        </div>
      </router-link>
    </template>
    <template v-if="isAuth">
      <div class="el-menu-item" @click="logoutHandler">Выйти</div>
    </template>
  </el-menu>
</template>

<script>
import { actionTypes, getterTypes } from "@/store/auth";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      isAuth: getterTypes.isAuth,
      isAnonymous: getterTypes.isAnonymous
    })
  },
  methods: {
    ...mapActions({
      logout: actionTypes.logout
    }),
    logoutHandler() {
      this.logout().then(() => {
        if (this.$route.name !== "home") this.$router.push({ name: "home" });
      });
    }
  }
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
