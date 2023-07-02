<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <slot></slot>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  methods: {
    close() {
      this.onClose();
    },
  },
});
</script>

<style scoped>
/* Your modal styles go here */
</style>
