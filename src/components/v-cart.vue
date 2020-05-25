<template>
  <div class="v-cart">

  </div>
</template>

<script>
export default {
  name: 'v-cart',
  data() {
    return {};
  },
  props: {
  },
};
</script>

<style lang="scss">
.v-cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: $padding*2 $padding*3;
      display: flex;
      justify-content: center;
      background: $green-bg;
      color: #ffffff;
      font-size: 20px;
    }
    .total__name {
      margin-right: $margin*2;
    }
  }

</style>
