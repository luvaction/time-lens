import { defineStore } from "pinia";
import { User } from "../interfaces/user";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLoggedIn: Boolean(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user") || "null") as User | null,
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
