<template>
  <vue-cal
    class="vuecal--blue-theme"
    selected-date=""
    :time-from="10 * 60"
    locale="en"
    :events="events"
    editable-events
    events-count-on-year-view
    events-on-month-view="short"
  >
  </vue-cal>
</template>

<script lang="ts">
// Documentation: https://antoniandre.github.io/vue-cal

import VueCal from "vue-cal";
// import "vue-cal/dist/vue-cal.css";
import "../style/vuecal.css";
export default {
  components: { VueCal },
  data: () => ({
    events: [
      {
        start: "2023-07-02 10:35",
        end: "2023-07-02 11:30",
        title: "Test",
      },
    ],
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vuecal {
  height: 90vh;
}

.vuecal {
  margin: auto;
  max-width: 1300px;
  max-height: 662px;
}

.vuecal__event {
  background-color: rgba(173, 216, 230, 0.5);
  box-sizing: border-box;
  padding: 5px;
}

.vuecal__event.lunch {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    #f2f2f2 10px,
    #f2f2f2 20px
  );
}
</style>
