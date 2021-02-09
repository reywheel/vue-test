<template>
  <el-row>
    <el-col :span="6" :offset="9" class="column">
      <AppValidationErrors
        v-if="isHaveErrors"
        :errors="preparedValidationErrors"
        title="Ошибки валидации"
        class="validation-errors"
      />
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
import { mapGetters, mapActions } from "vuex";
import AppValidationErrors from "@/components/ValidationErrors";

export default {
  name: "Login",
  components: {
    AppValidationErrors
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      isSubmitting: getterTypes.isSubmitting,
      validationErrors: getterTypes.errors,
      isHaveErrors: getterTypes.isHaveErrors
    }),
    preparedValidationErrors() {
      return this.validationErrors
        ? Object.values(this.validationErrors).flat()
        : null;
    },
    userCredentials() {
      return {
        email: this.email,
        password: this.password
      };
    }
  },
  methods: {
    ...mapActions({
      login: actionTypes.login
    }),
    submitHandler() {
      this.login({ userCredentials: this.userCredentials })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
.column {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.validation-errors {
  margin-bottom: 20px;
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
