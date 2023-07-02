import { setupCalendar, Calendar, DatePicker, Defaults } from "v-calendar";

export function initializeCalendar() {
  const userDefaults: Defaults = {}; // Customize the default options if needed
  setupCalendar(undefined, userDefaults);
}

export { Calendar, DatePicker };
