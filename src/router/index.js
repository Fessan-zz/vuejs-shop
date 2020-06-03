import Vue from 'vue';
import VueRouter from 'vue-router';


import vCatalog from '@/components/catalog/v-catalog.vue';
import vCart from '../components/cart/v-cart.vue';
import vMainPage from '../components/main-page/v-main-page.vue';
import vProductPage from '../components/catalog/v-product-page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: vMainPage,

  },
  {
    path: '/catalog',
    name: 'catalog',
    component: vCatalog,
  },
  {
    path: '/product',
    name: 'product',
    component: vProductPage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: vCart,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
