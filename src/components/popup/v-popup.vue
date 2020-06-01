<template>
  <div class="v-popup__wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{popopTitle}}</span>
        <span>
          <i
            class="material-icons"
            @click="closePopup"
          >
            close
          </i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button
          class="close_modal"
          @click="closePopup"
        >
          Close
        </button>
        <button
          class="submit_btn"
          @click="rigthBtnAction"
        >
          {{rightBtnTitle}}
        </button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    rigthBtnAction() {
      this.$emit('rigthBtnAction');
    },
  },
  props: {
    rightBtnTitle: {
      type: String,
      default: 'Ok',
    },
    popopTitle: {
      type: String,
      default: 'Popup name',
    },
  },
  mounted() {
    document.addEventListener('click', (item) => {
      if (item.target === this.$refs.popup_wrapper) {
        this.closePopup();
      }
    });
  },
};
</script>

<style lang="scss">
.v-popup__wrapper{
  background: rgba(64,64,64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
}
.v-popup {
  padding: 20px;
  position: fixed;
  top: 200px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  width: 400px;
  z-index: 10;
  &__header, &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit_btn{
    padding: 8px;
    color: white;
    background: aqua;
  }
  .close_modal{
    padding: 8px;
    color: white;
    background: red;
  }
}
</style>
