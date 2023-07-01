<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="about-us">
        <h3>About Us</h3>
        <p>JYK</p>
      </div>
      <div class="contact-us">
        <h3>Contact Us</h3>
        <p>Email: example@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
      <div class="follow-us">
        <h3>Follow Us</h3>
        <p>Links to social media profiles.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  // any props or data
});
</script>

<style lang="scss" scoped>
$layout-bg-color: rgb(160, 160, 160);
$footer-bg-color: rgb(48, 48, 48);
$sidebar-bg-color: rgb(102, 72, 28);
$main-bg-color: rgb(214, 214, 214);
$default-font-size: 16px;

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex: 0 0 10%;
  font-size: $default-font-size;
  max-height: 13%;
  background-color: $footer-bg-color;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.about-us,
.contact-us,
.follow-us {
  flex: 1;
}
</style>
