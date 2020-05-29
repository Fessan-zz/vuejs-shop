<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <v-select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <div class="v-catalog__list">
      <v-catalog-item
      v-for="product in filteredProducts"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vCatalogItem from './v-catalog-item.vue';
import vSelect from '../v-select.vue';

export default {
  name: 'v-catalog',
  data() {
    return {
      categories: [
        { name: 'Все', value: 'All' },
        { name: 'Мужские', value: 'м' },
        { name: 'Женские', value: 'ж' },
      ],
      selected: 'Все',
      sortedProducts: [],
    };
  },
  props: {},
  components: { vCatalogItem, vSelect },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      // eslint-disable-next-line array-callback-return
      this.PRODUCTS.map((item) => {
        if (item.category === category.name) {
          this.sortedProducts.push(item);
        }
      });
      this.selected = category.name;
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      }
      return this.PRODUCTS;
    },
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: fixed;
    top: 80px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
    background: #ffffff;
  }
  // }
  // .filters {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }
  // .range-slider {
  //   width: 200px;
  //   margin: auto 16px;
  //   text-align: center;
  //   position: relative;
  // }
  // .range-slider svg, .range-slider input[type=range] {
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  // }
  // input[type=range]::-webkit-slider-thumb {
  //   z-index: 2;
  //   position: relative;
  //   top: 2px;
  //   margin-top: -7px;
}
</style>
