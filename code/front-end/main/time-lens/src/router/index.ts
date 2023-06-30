import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    // add more routes as needed
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
