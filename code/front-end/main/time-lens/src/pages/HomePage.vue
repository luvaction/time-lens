<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>Manage Your Time Efficiently with Time Lens</h1>
      <p>
        Our aim is to provide an efficient time management tool for personal
        use. Make the most out of your time!
      </p>
      <!-- <button class="btn get-start">Get Started</button> -->
    </div>
    <!-- More sections could go here -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  // any props or data
});
</script>

<style scoped>
.home-page {
  padding: 20px;
  text-align: center;

  .hero-section {
    max-width: 900px;
    margin: 0 auto;
    h1 {
      font-size: 2.5em;
      margin-bottom: 1em;
    }
    p {
      font-size: 1.5em;
      margin-bottom: 2em;
    }
    button {
      padding: 20px 20px;
      font-size: 1.5em;
      border: none;
      background-color: #6c757d;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #5a6268;
      }
    }
  }
}
</style>
