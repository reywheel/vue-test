<template>
  <el-row>
    <el-col :span="6" :offset="9" class="column">
      <el-card class="box-card card">
        <div slot="header" class="clearfix card__header">
          <h2>Вход</h2>
        </div>
        <form action="#" @submit.prevent="submitHandler">
          <el-input
            placeholder="Email"
            class="input"
            v-model="email"
          ></el-input>
          <el-input
            placeholder="Пароль"
            class="input"
            v-model="password"
            show-password
          ></el-input>
          <el-button type="success" native-type="submit" :loading="isSubmitting"
            >Войти
          </el-button>
        </form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { actionTypes, getterTypes } from "@/store/auth";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      isSubmitting: getterTypes.isSubmitting
    }),
    userCredentials() {
      return {
        email: this.email,
        password: this.password
      };
    }
  },
  methods: {
    submitHandler() {
      this.$store
        .dispatch(actionTypes.login, {
          userCredentials: this.userCredentials
        })
        .then(() => {
          this.$router.push({ name: "home" });
        });
    }
  }
};
</script>

<style scoped lang="scss">
.column {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}

.card {
  width: 100%;
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  margin-bottom: 10px;
}
</style>
