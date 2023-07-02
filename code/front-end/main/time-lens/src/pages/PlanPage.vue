<template>
  <div class="plan-page">
    <h1>Plan Your Day</h1>
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

<style lang="scss" scoped>
.plan-page {
  margin: 0 auto;
  h1 {
    font-size: 2.5em;
  }
}
</style>
