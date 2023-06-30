<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "./layout/MainLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    MainLayout,
  },
});
</script>

<style scoped>
/* global styles go here */
</style>
