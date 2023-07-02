<!-- components/PlanModal.vue -->

<template>
  <div class="plan-modal" v-if="show">
    <div class="modal-content">
      <span class="close-button" @click="onClose">&times;</span>
      <p>Selected: {{ date }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlanModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    onClose: {
      type: Function as unknown as () => (e: MouseEvent) => void,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.plan-modal {
  /* 모달 배경 스타일 */
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은색 */

  /* 모달 내용 스타일 */
  .modal-content {
    font-size: 20px;
    background-color: #fff;
    margin: 15% auto; /* 상하 15% 마진, 좌우는 가운데 정렬 */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* 대부분의 화면을 차지 */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;
  }

  /* 모달이 열릴 때의 애니메이션 */
  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  /* Close 버튼 스타일 */
  .close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
