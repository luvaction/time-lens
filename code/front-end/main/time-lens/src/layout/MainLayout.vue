<template>
  <div class="layout">
    <Header v-if="!$route.meta.hideHeader" />
    <div class="main">
      <Sidebar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    Header,
    Footer,
    Sidebar,
  },
});
</script>

<style lang="scss" scoped>
$layout-bg-color: rgb(158, 116, 99);
$footer-bg-color: rgb(48, 48, 48);
$sidebar-bg-color: rgb(102, 72, 28);
$main-bg-color: rgb(214, 214, 214);
$default-font-size: 28px;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
}

.main {
  font-size: $default-font-size;
  display: flex;
  flex: 1;
}

.sidebar {
  flex: 0 0 20%;
  max-width: 20%;
  background-color: $sidebar-bg-color;
}

.main > *:last-child {
  flex: 1;
  background-color: $main-bg-color;
}
</style>
