<template>
  <div class="calendar">
    <div class="header">
      <button @click="prevMonth">Prev</button>
      <span>{{ date.getFullYear() }} {{ date.getMonth() + 1 }}</span>
      <button @click="nextMonth">Next</button>
    </div>
    <table>
      <tr>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </tr>
      <tr v-for="(week, i) in calendar" :key="i">
        <td
          v-for="(day, j) in week"
          @click="selectDate(day)"
          :key="j"
          :class="{
            selected: selectedDate === day,
            hoverable: day,
            empty: !day,
          }"
        >
          {{ day ? day.getDate() : "" }}
        </td>
      </tr>
    </table>
  </div>

  <PlanModal
    v-if="selectedDate"
    :show="showModal"
    :date="selectedDate"
    @close="closeModal"
  />
</template>

<script lang="ts">
import { ref, computed, SetupContext } from "vue";
import PlanModal from "./PlanModal.vue"; // adjust path to your PlanModal.vue file

export default {
  name: "Calendar",
  emits: ["dayClicked"],
  components: {
    PlanModal,
  },
  setup(_, context: SetupContext) {
    const date = ref(new Date());
    const selectedDate = ref<Date | null>(null);

    const getWeeksInMonth = (month: number, year: number) => {
      const weeks: Date[][] = [];
      const firstDate = new Date(year, month, 1);
      const firstDayOfWeek = firstDate.getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      let week: Date[] = new Array(7).fill(null);
      let dayIndex = 0;

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dayOfWeek = (firstDayOfWeek + dayIndex) % 7;
        week[dayOfWeek] = date;

        if (dayOfWeek === 6 || day === daysInMonth) {
          weeks.push(week);
          week = new Array(7).fill(null);
        }

        dayIndex++;
      }

      return weeks;
    };

    const calendar = computed(() =>
      getWeeksInMonth(date.value.getMonth(), date.value.getFullYear())
    );

    const prevMonth = () => {
      date.value = new Date(
        date.value.getFullYear(),
        date.value.getMonth() - 1,
        1
      );
    };

    const nextMonth = () => {
      date.value = new Date(
        date.value.getFullYear(),
        date.value.getMonth() + 1,
        1
      );
    };

    const showModal = ref(false);

    const selectDate = (day: Date) => {
      if (day) {
        context.emit("dayClicked", day);
        // selectedDate.value = day;
        // showModal.value = true;
      }
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      date,
      calendar,
      prevMonth,
      nextMonth,
      selectDate,
      selectedDate,
      showModal,
      closeModal,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../style/variables.scss";

.calendar {
  max-width: $base-unit * 25;
  width: 100%;
  overflow-x: visible;
  font-size: $font-size-large;
  width: $base-unit * 25;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;
    padding: $base-unit * 0.5;
  }

  table {
    table-layout: fixed;
    width: 100%;
    height: 100%;
    border-collapse: collapse;

    th {
      font-size: $font-size-medium;
      background-color: rgb(29, 29, 29);
      color: #fff;
      height: $base-unit * 2;
      border: 1px solid rgb(49, 49, 49);
      text-align: center;
      padding: $base-padding * 2;
    }
    td {
      background-color: #adadad;
      height: $base-unit * 2;
      border: 1px solid rgb(49, 49, 49);
      text-align: center;
      padding: $base-padding * 2;
      &:hover.hoverable {
        cursor: pointer;
        background-color: #bd5b00;
      }
      &.selected {
        background-color: #df6c00;
        color: #fff;
      }
      &.empty {
        background-color: rgb(214, 214, 214);
      }
    }
  }

  @media (max-width: 800px) {
    width: $base-unit * 40;

    table {
      th {
        height: $base-unit * 1.5;
        padding: $base-padding;
      }
      td {
        width: $base-unit * 4;
        height: $base-unit * 4;
        font-size: $font-size-medium;
      }
    }
  }

  @media (max-width: 600px) {
    width: $base-unit * 20;

    table {
      td {
        width: $base-unit * 5;
        height: $base-unit * 5;
        font-size: $font-size-large;
      }
    }
  }
}
</style>
