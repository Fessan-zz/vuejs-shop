<template>
  <div class="v-catalog-item">

    <v-popup
      v-if="isInfoPopupVisible"
      @closePopup="closeInfoPopup"
      rightBtnTitle="Add to cart"
      :popopTitle="product_data.name"
      @rigthBtnAction="addToCart"

    >
    <img class="v-catalog-item__image"
    :src="require(`../../assets/img/${product_data.image}`)" alt="img">
    <div>
      <p class="v-catalog-item__name">{{product_data.name}}</p>
      <p class="v-catalog-item__price">Price: {{product_data.price | toFix | formatedPrice}} Р.</p>
      <p class="v-catalog-item__price">Category: {{product_data.category}}</p>
    </div>
    </v-popup>

    <img class="v-catalog-item__image"
    :src="require(`../../assets/img/${product_data.image}`)" alt="img">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price | toFix | formatedPrice}}</p>
    <button
      class="v-catalog-item__show_info"
      @click="showPopupInfo"
      >
      Show info
    </button>
    <button class="v-catalog-item__add_to_cart_btn btn"
      @click="addToCart"
      >add to Cart
    </button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup.vue';
import toFix from '../../filters/toFix';
import formatedPrice from '../../filters/price-format';

export default {
  name: 'v-catalog-item',
  components: { vPopup },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1);
  },
  props: {
    product_data: {
      type: Object,
      default: () => {},
    },
  },
  filters: {
    toFix,
    formatedPrice,
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
      width: 100px;
    }
  }
</style>
