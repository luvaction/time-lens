import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import HomePage from "../pages/HomePage.vue";
import TimeLensPage from "../pages/TimeLensPage.vue";
import PlanPage from "../pages/PlanPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/TimeLens",
    name: "TimeLens",
    component: TimeLensPage,
    meta: { hideHeader: false },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { hideHeader: true },
  },
  {
    path: "/plan",
    name: "Plan",
    component: PlanPage,
    meta: { hideHeader: false },
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
    meta: { hideHeader: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
