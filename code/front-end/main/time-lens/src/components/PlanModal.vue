<!-- components/PlanModal.vue -->
<template>
  <div class="plan-modal" v-if="show">
    <div class="modal-overlay" @click="onClose"></div>
    <div class="modal-content">
      <span class="close-button" @click="onClose">&times;</span>
      <div class="content-field">
        <div class="left-column">
          <div class="column-item">
            <label>Date:</label>
            <span>{{ formattedDate }}</span>
          </div>
          <div class="column-item">
            <label>Status:</label>
            <span>{{ status }}</span>
          </div>
          <div class="column-item">
            <label>Type:</label>
            <span>{{ type }}</span>
          </div>
        </div>
        <div class="textarea-column">
          <textarea v-model="content"></textarea>
        </div>
        <div class="markdown-column">
          <VueMarkdownIt :source="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueMarkdownIt from "vue3-markdown-it";
// import "highlight.js/styles/monokai.css";

export default defineComponent({
  name: "PlanModal",
  components: {
    VueMarkdownIt,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    onClose: {
      type: Function as unknown as () => (e: MouseEvent) => void,
      required: true,
    },
  },
  data() {
    return {
      content: "# Title",
    };
  },
  computed: {
    formattedDate() {
      const dateObj = new Date(this.date);
      const year = dateObj.getFullYear();
      const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
      const date = dateObj.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${date}`;
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
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: inline-block;
    width: 33%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  /* 모달 내용 스타일 */
  .modal-content {
    font-size: 16px;
    background-color: #4d4d4d;
    padding: 30px;
    /* border: 1px solid #888; */
    border-radius: 10px;
    position: relative;
    width: 90%;
    height: 90%;

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #aaa;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      &:hover,
      &:focus {
        color: black;
        text-decoration: none;
      }
    }

    .content-field {
      width: 100%;
      display: flex;
      .left-column {
        margin-top: 10px;
        align-items: left;
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 30px;
      }

      .column-item {
        text-align: left;
        width: 100%;
        color: #aaa;
        margin-bottom: 10px;
      }
      .textarea-column {
        width: 40%;
        margin-left: 20px;
      }
      textarea {
        border: 1px solid #9c9c9c;
        width: 100%;
        height: 100%;
        outline: none;
        resize: none;
        background-color: #f6f6f6;
        font-size: 17px;
        font-family: "Monaco", courier, monospace;
      }
      .markdown-column {
        flex: 1;
        width: 40%;
        padding-left: 20px;
        overflow-y: scroll;
        height: 100.6%;
        background-color: #f6f6f6;
        border: 1px solid #9c9c9c;
        overflow-y: scroll;
        text-align: left;
        flex: 3;
        padding-left: 20px;
        overflow-y: auto;
        position: relative;
      }
      code {
        color: #f66;
      }
    }
    label {
      font-weight: bold;
    }
  }

  @keyframes animatetop {
    from {
      top: -10px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1.9;
    }
  }
}
</style>
