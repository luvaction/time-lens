<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="contact-us">
        <h3>Contact</h3>
        <p>Name: JY Kim</p>
        <p>Email: luvaction0@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="scss" scoped>
$layout-bg-color: rgb(160, 160, 160);
$footer-bg-color: rgb(48, 48, 48);
$sidebar-bg-color: rgb(102, 72, 28);
$main-bg-color: rgb(255, 255, 255);
$default-font-size: 10px;

.footer {
  display: flex;
  font-size: $default-font-size;
  max-height: 10%;
  background-color: $footer-bg-color;
  margin-top: 20px;
  padding: 20px; /* padding for the whole footer */
}

.footer-content {
  color: rgb(156, 120, 20);
  display: flex;
  width: 100%;
  justify-content: space-around; /* distribute the content evenly */
}

.about-us,
.contact-us,
.follow-us {
  text-align: center; /* text alignment in each block */
  flex: 1;

  h3 {
    margin-bottom: 10px; /* spacing between the header and the content */
  }

  p {
    margin: 5px 0; /* decrease the spacing between the paragraphs */
  }
}
</style>
