// src/stores/authStore.ts
import { defineStore } from "pinia";
import { User } from "../interfaces/user";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLoggedIn: false,
    user: null as User | null, // user 필드의 타입을 User | null로 명시합니다.
  }),
  actions: {
    logIn(user: User) {
      this.isLoggedIn = true;
      this.user = user;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
    },
    logOut() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("user");
    },
  },
});
