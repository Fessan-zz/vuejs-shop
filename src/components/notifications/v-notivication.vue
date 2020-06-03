<template>
  <div class="v-notification">
    <transition-group
      name="v-transition-animate"
    >
      <div
        class="v-notification__content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
      >
        <div class="content__text">
          <span>{{message.name}}</span>
          <i class="material-icons">{{message.icon}}</i>
        </div>
        <div class="content_buttons">
          <button v-if="rigthBtn.length">{{rigthBtn}}</button>
          <button v-if="leftBtn.length">{{leftBtn}}</button>
        </div>
      </div>
    </transition-group>

  </div>
</template>

<script>
export default {
  name: 'v-notification',
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    rigthBtn: {
      type: String,
      default: '',
    },
    leftBtn: {
      type: String,
      default: '',
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  methods: {
    hideNotification() {
      if (this.messages.length) {
        setTimeout(() => {
          this.messages.splice(this.messages.length - 1, 1);
        }, this.timeout);
      }
    },
  },
  mounted() {
    this.hideNotification();
  },
  watch: {
    messages() {
      this.hideNotification();
    },
  },
};
</script>

<style lang="scss">

.v-notification {
    position: fixed;
    top: 150px;
    right: 16px;
    z-index: 10;
    &__content {
      padding: 16px;
      border-radius: 4px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin-bottom: 16px;
      background: green;
      &.error {
        background: red;
      }
      &.warning {
        background: orange;
      }
      &.check_circle {
        background: green;
      }
    }
    .content {
      &__text {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .material-icons {
      margin-left: 16px;
    }
  }
  .v-transition-animate {
    &-enter {
      transform: translateX(120px);
      opacity: 0;
    }
    &-enter-active {
      transition: all .6s ease;
    }
    &-enter-to {
      opacity: 1;
    }
    &-leave {
      height: 50px;
      opacity: 1;
    }
    &-leave-active {
      transition: transform .6s ease, opacity .6s, height .6s .2s;
    }
    &-leave-to {
      height: 0;
      transform: translateX(120px);
      opacity: 0;
    }
    &-move {
      transition: transform .6s ease;
    }
  }
</style>
