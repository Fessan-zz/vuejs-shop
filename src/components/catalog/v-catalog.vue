<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="filters">
      <v-select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <div class="range-slider">
      <input
        type="range"
        min="0"
        max="10000"
        step="100"
        v-model.number="minPrice"
        @change="setRangeSliders"
        >
      <input
        type="range"
        min="0"
        max="10000"
        step="100"
        v-model.number="maxPrice"
        @change="setRangeSliders"
        >
    </div>
    <div class="range-values">
      <p>Min: {{minPrice}}</p>
      <p>Max: {{maxPrice}}</p>
    </div>
    </div>
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
      minPrice: 0,
      maxPrice: 10000,
    };
  },
  props: {},
  components: { vCatalogItem, vSelect },
  methods: {
    setRangeSliders() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(
        (item) => item.price >= this.minPrice && item.price <= this.maxPrice,
      );
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((e) => {
          this.selected = category.name;
          return e.category === category.name;
        });
      }
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter((item) => item.name.toLowerCase()
          .includes(value.toLowerCase()));
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        this.sortByCategories();
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    });
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART', 'IS_MOBILE', 'IS_DESKTOP', 'SEARCH_VALUE']),
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
    top: 100px;
    right: 100px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
    background: #ffffff;
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
}
}
</style>
