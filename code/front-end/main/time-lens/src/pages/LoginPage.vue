<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="submitForm">
        <input type="text" v-model="username" placeholder="ID" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userStore";
import { login } from "../apis/auth";

export default defineComponent({
  setup() {
    const router = useRouter();
    const userStore = useUserStore();
    const username = ref("");
    const password = ref("");

    const submitForm = async () => {
      if (username.value && password.value) {
        try {
          const result = await login({
            user_id: username.value,
            password: password.value,
          });
          if (result?.status === 200) {
            userStore.logIn(result.data);
            router.push({ name: "Home" });
          }
        } catch (error) {
          // error handling ...
        }
      } else {
        alert("Please fill in all fields");
      }
    };

    return { username, password, submitForm };
  },
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.login-form h2 {
  margin-bottom: 20px;
}

.login-form input {
  width: 92.2%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-form button {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 4px;
  background-color: #f87800;
  color: white;
}
</style>
../store/userStore
