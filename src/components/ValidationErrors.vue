<template>
  <el-alert :title="title" type="error">
    <ul>
      <li v-for="(error, index) of errors" :key="index">{{ error }}</li>
    </ul>
  </el-alert>
</template>

<script>
export default {
  name: "ValidationErrors",
  props: {
    title: {
      type: String,
      required: true
    },
    errors: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 15px;
  margin-bottom: 0;
}
</style>
