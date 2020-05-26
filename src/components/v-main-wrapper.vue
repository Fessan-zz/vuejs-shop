<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog />
    <v-cart
     v-if="CART.length"
     :cart_data="CART"
     />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import vCart from './v-cart.vue';
import vCatalog from './v-catalog.vue';

export default {
  name: 'v-main-wrapper',
  components: { vCatalog, vCart },
  props: {},
  data() {
    return {
      title: 'Main Wrapper',
    };
  },
  computed: {
    ...mapGetters(['CART']),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('hello!');
  },
};
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>>
