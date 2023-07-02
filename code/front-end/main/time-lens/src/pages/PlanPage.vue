<template>
  <div class="plan-page">
    <Calendar @dayClicked="openModal" />
    <PlanModal
      v-if="selectedDate"
      :show="showModal"
      :date="selectedDate"
      @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Calendar from "../components/Calendar.vue";
import PlanModal from "../components/PlanModal.vue";

export default defineComponent({
  name: "PlanPage",
  components: {
    Calendar,
    PlanModal,
  },
  setup() {
    const showModal = ref(false);
    const selectedDate = ref<Date | null>(null);

    const openModal = (date: Date) => {
      // console.log("date", date);
      if (date) {
        // only open modal if date is not null or empty
        selectedDate.value = date;
        showModal.value = true;
      }
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      showModal,
      selectedDate,
      openModal,
      closeModal,
    };
  },
});
</script>
