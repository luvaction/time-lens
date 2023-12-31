<template>
  <header class="header">
    <button class="header-btn" @click="goToHomePage">Home</button>
    <!-- <button class="header-btn" @click="goToTimeLensPage">TimeLens</button> -->
    <button class="header-btn" @click="goToPlanPage">Plan</button>
    <button class="header-btn" @click="goToSettingsPage">Settings</button>
    <div class="dropdown">
      <div v-if="isLoggedIn" @click="toggleDropdown">
        <button class="dropbtn">
          {{ user?.user_id }}<i class="fa fa-caret-down"></i>
        </button>
        <div
          class="dropdown-content"
          :class="{ 'dropdown-show': isDropdownOpen }"
        >
          <a>{{ user?.user_id }}({{ user?.name }})</a>
          <a @click="logOut">Logout</a>
        </div>
      </div>

      <button v-else class="login-btn" @click="goToLoginPage">Login</button>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/userStore";
const isLoggedIn = computed(() => useUserStore().isLoggedIn);

export default defineComponent({
  name: "Header",
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const user = ref(userStore.user);
    const isLoggedIn = computed(() => userStore.isLoggedIn);

    const isDropdownOpen = ref(false);
    const goToLoginPage = () => {
      router.push({ name: "Login" });
    };

    const logOut = () => {
      userStore.logOut();
      goToLoginPage();
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const goToHomePage = () => {
      router.push({ name: "Home" });
    };

    const goToPlanPage = () => {
      router.push({ name: "Plan" });
    };

    const goToTimeLensPage = () => {
      router.push({ name: "TimeLens" });
    };

    const goToSettingsPage = () => {
      router.push({ name: "Settings" });
    };

    watch(isLoggedIn, (newVal) => {
      nextTick(() => {
        if (newVal) {
          user.value = userStore.user; // 로그인 후 사용자 정보 업데이트
          goToHomePage();
        } else {
          goToLoginPage();
        }
      });
    });

    return {
      isLoggedIn,
      user,
      logOut,
      goToLoginPage,
      isDropdownOpen,
      toggleDropdown,
      goToPlanPage,
      goToHomePage,
      goToSettingsPage,
      goToTimeLensPage,
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  min-height: 6%;
  background-color: rgb(105, 105, 105);
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.header-btn {
  background-color: transparent;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
  &:hover {
    color: #f1f1f1;
  }
}

.login-btn {
  background-color: #f87800;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  margin-left: auto; // 여기에 추가
  &:hover {
    background-color: #e66f00;
  }
}
.dropdown {
  position: relative;
  display: inline-block;
  margin-left: auto;

  .dropbtn {
    background-color: #f87800;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: #e66f00;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    font-size: 16px;
    right: 0;
    background-color: transparent;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding-top: 10px;

    p {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      border-radius: 3px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: #f9f9f9;
      &:hover {
        background-color: #ffaf7a;
      }
    }

    button {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      background: transparent;
      width: 100%;
      text-align: left;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: black;
      }
    }
  }

  .dropdown-show {
    display: block;
  }
}
</style>
