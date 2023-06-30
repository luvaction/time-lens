<template>
  <div class="layout">
    <Header />
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

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto; /* 이 코드가 추가되었습니다 */
}

.header {
  flex: 0 0 10%;
  font-size: 30px;
  max-height: 10%;
  background-color: rgb(
    177,
    177,
    177
  ); /* 배경색이 잘 적용되었는지 확인하실 수 있도록 추가했습니다 */
}
.footer {
  flex: 0 0 10%;
  font-size: 20px;
  max-height: 10%;
  background-color: rgb(
    48,
    48,
    48
  ); /* 배경색이 잘 적용되었는지 확인하실 수 있도록 추가했습니다 */
}

.main {
  font-size: 30px;
  display: flex;
  flex: 1;
}

.sidebar {
  flex: 0 0 20%;
  max-width: 20%;
  background-color: green; /* 배경색이 잘 적용되었는지 확인하실 수 있도록 추가했습니다 */
}

/* 이 CSS는 router-view에 배경색을 추가합니다. */
.main > *:last-child {
  flex: 1;
  background-color: rgb(214, 214, 214);
}
</style>
