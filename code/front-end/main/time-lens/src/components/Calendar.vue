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
</template>
<script lang="ts">
import { ref, computed } from "vue";

export default {
  name: "Calendar",
  setup() {
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

    const selectDate = (day: Date) => {
      selectedDate.value = day;
    };

    return { date, calendar, prevMonth, nextMonth, selectDate, selectedDate };
  },
};
</script>
<style scoped lang="scss">
.calendar {
  font-size: 19px;
  width: 50%;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
  }

  table {
    table-layout: fixed;
    width: 100%;
    height: 100%;
    border-collapse: collapse;

    th {
      font-size: 12px;
      background-color: rgb(29, 29, 29);
      color: #fff;
      height: 2em;
      border: 1px solid rgb(49, 49, 49);
      text-align: center;
      padding: 10px;
    }
    td {
      background-color: #adadad;
      height: 1em;
      border: 1px solid rgb(49, 49, 49);
      text-align: center;
      padding: 10px;
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

      @media (max-width: 800px) {
        width: 80px;
        height: 80px;
        font-size: 14px;
      }
    }
  }
}
</style>
