<template>
  <div class="plan-page">
    <!-- <h2>Plan Your Day</h2> -->
    <Calendar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calendar from "../components/Calendar.vue";

export default defineComponent({
  name: "PlanPage",
  components: {
    Calendar,
  },
});
</script>

<style scoped lang="scss">
.plan-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2em;
  }
}
</style>
