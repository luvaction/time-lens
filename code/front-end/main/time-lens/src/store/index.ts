import { createStore } from "pinia";

export const useStore = createStore({
  id: "main",
  // a function that returns a fresh state
  state: () => ({
    // your data here
  }),
  // optional getters
  getters: {
    // your getters here
  },
  // optional actions
  actions: {
    // your actions here
  },
});
